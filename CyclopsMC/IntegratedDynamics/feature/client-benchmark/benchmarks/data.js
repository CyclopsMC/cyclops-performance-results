window.BENCHMARK_DATA = {
  "lastUpdate": 1790506360507,
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
          "id": "599f6857ba34097b40a71725f9157b4b1efdca21",
          "message": "Add client-side rendering benchmark to CI\n\nAdds a Client Benchmark job to the performance workflow, which uses\nclientdevbridge to run a headless dev client, generates fixed scenes,\nand measures the time per frame of rendering (total and block entities)\nwith the vanilla client profiler. Results are tracked with the same\nbenchmark action and results repository as the server benchmarks, and\nscreenshots of the scenes are uploaded as artifact.\n\nThis also adds a displaypanels preset to the generatenetwork command,\nfor measuring the rendering of part overlays.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01UnGZfpzDoeTQMikpdAjzZW",
          "timestamp": "2026-09-27T10:37:49Z",
          "tree_id": "e8507dfe1c2f2b0d1f11a299a512bc6ee1d24539",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/599f6857ba34097b40a71725f9157b4b1efdca21"
        },
        "date": 1790506079422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 8.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.51,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 32.64,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 16.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 23.45,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 16.94,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.95,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 3.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 7.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.92,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 3.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.001891,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.002755,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.001827,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.001005,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.015146,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000798,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.000971,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000891,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.00018,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.00076,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000362,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000888,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001441,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000727,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.00225,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.607128,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001377,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.00085,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.94,
            "unit": "tick time (ms)"
          }
        ]
      }
    ],
    "Integrated Dynamics Client Benchmark": [
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
          "id": "599f6857ba34097b40a71725f9157b4b1efdca21",
          "message": "Add client-side rendering benchmark to CI\n\nAdds a Client Benchmark job to the performance workflow, which uses\nclientdevbridge to run a headless dev client, generates fixed scenes,\nand measures the time per frame of rendering (total and block entities)\nwith the vanilla client profiler. Results are tracked with the same\nbenchmark action and results repository as the server benchmarks, and\nscreenshots of the scenes are uploaded as artifact.\n\nThis also adds a displaypanels preset to the generatenetwork command,\nfor measuring the rendering of part overlays.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01UnGZfpzDoeTQMikpdAjzZW",
          "timestamp": "2026-09-27T10:37:49Z",
          "tree_id": "e8507dfe1c2f2b0d1f11a299a512bc6ee1d24539",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/599f6857ba34097b40a71725f9157b4b1efdca21"
        },
        "date": 1790506359898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CLIENT FRAME: control_size_16",
            "value": 17.709,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: control_size_16",
            "value": 0.128,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: cables_size_16",
            "value": 168.938,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: cables_size_16",
            "value": 5.111,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: displaypanels_size_12",
            "value": 35.084,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: displaypanels_size_12",
            "value": 0.752,
            "unit": "frame time (ms)"
          }
        ]
      }
    ]
  }
}