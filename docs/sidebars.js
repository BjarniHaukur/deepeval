module.exports = {
  md: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Evaluation',
      items: [
        'evaluation-introduction',
        'evaluation-test-cases',
        'evaluation-datasets',
        {
          type: 'category',
          label: 'Metrics',
          items: [
            'metrics-introduction',
            'metrics-llm-evals',
            'metrics-summarization',
            'metrics-answer-relevancy',
            'metrics-faithfulness',
            'metrics-contextual-precision',
            'metrics-contextual-recall',
            'metrics-contextual-relevancy',
            'metrics-hallucination',
            'metrics-bias',
            'metrics-toxicity',
            'metrics-ragas',
            'metrics-custom',
            'metrics-performance',
            'metrics-others',
            'metrics-judgemental',
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Confident AI',
      items: [
        'confident-ai-introduction',
        'confident-ai-manage-datasets',
        'confident-ai-evaluate-datasets',
        'confident-ai-analyze-evaluations',
        'confident-ai-debug-evaluations',
        'confident-ai-github-actions',
        'confident-ai-evals-in-production'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations-introduction',
        'integrations-llamaindex',
        'integrations-huggingface'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Others',
      items: [
        'data-privacy',
      ],
      collapsed: false,
    },
  ]
}