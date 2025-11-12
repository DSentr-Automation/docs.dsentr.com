module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'getting-started/account-setup',
        'getting-started/dashboard',
        'getting-started/first-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      items: [
        'nodes/overview',
        'nodes/triggers/trigger-nodes',
        'nodes/actions/action-nodes',
        'nodes/logic/logic-nodes',
        {
          type: 'category',
          label: 'Action Nodes',
          items: [
            'nodes/action-nodes/overview',
            {
              type: 'category',
              label: 'Email Nodes',
              items: [
                'nodes/action-nodes/email/sendgrid-node',
                'nodes/action-nodes/email/mailgun-node',
                'nodes/action-nodes/email/aws-node'
              ]
            },
            {
              type: 'category',
              label: 'Messaging Nodes',
              items: [
                'nodes/action-nodes/messaging/slack-node',
                'nodes/action-nodes/messaging/teams-node',
                'nodes/action-nodes/messaging/google-chat-node'
              ]
            },
            'nodes/action-nodes/productivity/google-sheets-node',
            'nodes/action-nodes/web/http-request-node',
            'nodes/action-nodes/utility/run-code'
          ],
        }
      ],
    },
    'edges',
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/overview',
        'settings/settings/planbilling',
        'settings/settings/members',
        'settings/settings/engine',
        {
          type: 'category',
          label: 'Logs',
          items: [
            'settings/settings/logs-overview',
            'settings/settings/logs/executed-runs',
            'settings/settings/logs/dead-letter-queue',
            'settings/settings/logs/blocked-egress',
            'settings/settings/logs/change-history',
          ],
        },
        'settings/settings/webhooks',
        'settings/settings/secrets-api-keys',
        'settings/settings/privacy',
        'settings/settings/integrations',
        'settings/settings/workflows',
        'settings/settings/danger-zone'
      ],
    },
    'profile/profile',
    {
      type: 'category',
      label: 'Workflow Templates',
      items: [
        'templates/templates'
      ],
    },
    {
      type: 'category',
      label: 'Workflow Authentication',
      items: ['auth/api', 'auth/oauth'],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'billing/limits',
        'legal/terms',
        'legal/privacy'
      ],
    },
  ],
};
