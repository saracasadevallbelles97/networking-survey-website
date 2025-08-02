'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { SurveyResponse } from '@/lib/supabase'
import { formatDate } from '@/lib/utils'
import { Download, Users, TrendingUp, MessageSquare } from 'lucide-react'

export default function AdminPage() {
  const [responses, setResponses] = useState<SurveyResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    withEmail: 0,
    mostFrequent: '',
    topProblems: [] as string[],
    topSolutions: [] as string[]
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('survey_responses')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setResponses(data || [])
      calculateStats(data || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateStats = (data: SurveyResponse[]) => {
    const total = data.length
    const withEmail = data.filter(r => r.email).length
    
    // Most frequent networking frequency
    const frequencyCounts = data.reduce((acc, r) => {
      acc[r.networking_frequency] = (acc[r.networking_frequency] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    const mostFrequent = Object.entries(frequencyCounts)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'

    // Top problems
    const problemCounts = data.reduce((acc, r) => {
      r.main_problems.forEach(problem => {
        acc[problem] = (acc[problem] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)
    const topProblems = Object.entries(problemCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([problem]) => problem)

    // Top solutions
    const solutionCounts = data.reduce((acc, r) => {
      r.desired_solutions.forEach(solution => {
        acc[solution] = (acc[solution] || 0) + 1
      })
      return acc
    }, {} as Record<string, number>)
    const topSolutions = Object.entries(solutionCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([solution]) => solution)

    setStats({ total, withEmail, mostFrequent, topProblems, topSolutions })
  }

  const exportData = () => {
    const csvContent = [
      ['Date', 'Email', 'Networking Frequency', 'Platforms', 'Problems', 'Solutions', 'Industry', 'Experience Level', 'Comments'],
      ...responses.map(r => [
        formatDate(r.created_at!),
        r.email || '',
        r.networking_frequency,
        r.networking_platforms.join('; '),
        r.main_problems.join('; '),
        r.desired_solutions.join('; '),
        r.industry || '',
        r.experience_level,
        r.additional_comments || ''
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `survey-responses-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading survey data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Survey Dashboard</h1>
          <p className="text-gray-600">View and analyze survey responses</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Responses</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">With Email</p>
                <p className="text-2xl font-bold text-gray-900">{stats.withEmail}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Most Frequent</p>
                <p className="text-lg font-bold text-gray-900">{stats.mostFrequent}</p>
              </div>
            </div>
          </div>

          <div className="card">
            <button
              onClick={exportData}
              className="w-full flex items-center justify-center btn-primary"
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Top Problems & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Problems</h3>
            <div className="space-y-2">
              {stats.topProblems.map((problem, index) => (
                <div key={problem} className="flex items-center justify-between">
                  <span className="text-gray-700">{problem}</span>
                  <span className="text-sm text-gray-500">#{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Solutions</h3>
            <div className="space-y-2">
              {stats.topSolutions.map((solution, index) => (
                <div key={solution} className="flex items-center justify-between">
                  <span className="text-gray-700">{solution}</span>
                  <span className="text-sm text-gray-500">#{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responses Table */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Responses</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Experience
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Industry
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {responses.slice(0, 10).map((response) => (
                  <tr key={response.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(response.created_at!)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {response.email || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {response.networking_frequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {response.experience_level}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {response.industry || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {responses.length > 10 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Showing 10 of {responses.length} responses
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 