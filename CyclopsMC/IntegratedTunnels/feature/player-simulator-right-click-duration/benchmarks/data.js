window.BENCHMARK_DATA = {
  "lastUpdate": 1789807812371,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedTunnels",
  "entries": {
    "Integrated Tunnels Network Benchmark": [
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
          "id": "c4a363f7ede53caedea746b559fa0f9fe86c091b",
          "message": "Stop the first simulated click from holding right click indefinitely\n\nA simulated player holds right click for the time that passed since its\nprevious click, but that time was counted from tick zero of the world, so\nits very first click held right click for as long as the world had been\nrunning. Any item that behaves differently when held longer therefore\nbehaved unpredictably on that first click.\n\nCount from the moment the simulated player is created instead, so its\nfirst click holds right click for no time at all, and every click after it\nholds it for the time between two clicks as before.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01M33ptG2Reko7AGmxBjZQYj",
          "timestamp": "2026-09-19T08:41:08Z",
          "tree_id": "eecccd1c6d561d65e0ad667f564099c29028406e",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/c4a363f7ede53caedea746b559fa0f9fe86c091b"
        },
        "date": 1789807811847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 6.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_deep_size_9",
            "value": 1.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_deep_size_9",
            "value": 3.98,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 5,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.18,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 34.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.63,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 77.88,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.99,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 3.26,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 71.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 3.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 8.26,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 1.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 78.51,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 2.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_size_9",
            "value": 0.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_size_9",
            "value": 3.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 7.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1.18,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}