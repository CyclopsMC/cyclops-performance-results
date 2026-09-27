window.BENCHMARK_DATA = {
  "lastUpdate": 1790507761720,
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
          "id": "1d338e0545e7b4935df7e30795401a8e99b05862",
          "message": "Add large empty network and control server benchmarks\n\nAt 10x10x10, the per-cable overhead of an empty network is smaller than\nthe noise of the server tick time on CI. A 32x32x32 empty network (placed\nabove the template, with forced chunks) makes this overhead measurable,\nand a control benchmark without any network provides a baseline.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01UnGZfpzDoeTQMikpdAjzZW",
          "timestamp": "2026-09-27T11:09:15Z",
          "tree_id": "f39da4ddad03fb5093705df2c4fa3a281a34cb73",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/1d338e0545e7b4935df7e30795401a8e99b05862"
        },
        "date": 1790507761127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: control_size_0",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: control_size_0",
            "value": 0.16,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 5.76,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.5,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 57.83,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_32",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_32",
            "value": 6.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 10.19,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.54,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.26,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 10.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 9.99,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.45,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 2.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 4.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 2.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.001578,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.001206,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.001131,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.000821,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000566,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.016252,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.000789,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000488,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.366797,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000267,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.00059,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000177,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000465,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.000849,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000423,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.000913,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.001247,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000474,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.48,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}