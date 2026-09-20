window.BENCHMARK_DATA = {
  "lastUpdate": 1789917000668,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedDynamics",
  "entries": {
    "Integrated Dynamics Network Benchmark": [
      {
        "commit": {
          "author": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "committer": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "distinct": true,
          "id": "306be991d3b37c94e5bbe9cd1009da5c364f0238",
          "message": "Allow materialized variables to be copied and pasted via the clipboard\n\nThe Materializer gets two copy buttons, one for a readable SNBT value and\none for a shorter gzipped and base64-encoded form. The Logic Programmer\ngets a Clipboard element that pastes either form onto a Variable Card, so\nvalues and materialized operators can be shared between players and worlds.\n\nOnly materialized payloads are accepted: a positioned list proxy or\noperator would otherwise let a handcrafted payload read blocks anywhere.\nFactories and operator serializers declare this through a new\nisMaterialized method, so addons can opt in.\n\nCloses #674\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_015XjdQNSd2L5BL8JGGLTFEM",
          "timestamp": "2026-09-19T10:29:11Z",
          "tree_id": "e4f613d40672d49941a7271dd6ca67ae92a19040",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/306be991d3b37c94e5bbe9cd1009da5c364f0238"
        },
        "date": 1789814211030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 8.78,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.5,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 60.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 14.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.54,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 30.64,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 14.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.54,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 2.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 6.62,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 2.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.001897,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.000961,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.00109,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.00097,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000599,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.47962,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.000698,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.015925,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000282,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000749,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000125,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000527,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.001604,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001046,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000566,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000611,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000649,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001042,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.45,
            "unit": "tick time (ms)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "committer": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "distinct": true,
          "id": "2797416a57a3e3b2e8633e0de6fece01f98f36c5",
          "message": "Revert the changelog entry\n\nThe changelog is maintained upon release.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_015XjdQNSd2L5BL8JGGLTFEM",
          "timestamp": "2026-09-20T15:01:35Z",
          "tree_id": "5870158626ad55b20c65aa5b83bb522ca7df7e64",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/2797416a57a3e3b2e8633e0de6fece01f98f36c5"
        },
        "date": 1789917000031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 7.95,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.54,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 25.15,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 11.49,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.6,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.19,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 16,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 13.12,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 2.57,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 6.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 2.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.001771,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.000646,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.001056,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.000574,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000716,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.458644,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.000756,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000331,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000715,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000216,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000582,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.001514,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001022,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.010547,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000502,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000636,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000579,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001085,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.53,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}