window.BENCHMARK_DATA = {
  "lastUpdate": 1789906319495,
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
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e90cf562b84a0469bc051fcbba321fcf73c66f62",
          "message": "Apply suggestion from @rubensworks",
          "timestamp": "2026-09-20T13:44:39+02:00",
          "tree_id": "6f8e5f7e39f06924f377030a99437bf785c4a4c8",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/e90cf562b84a0469bc051fcbba321fcf73c66f62"
        },
        "date": 1789904951036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 7.91,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_deep_size_9",
            "value": 1.1,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_deep_size_9",
            "value": 2.86,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.24,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 5.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 0.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 37.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 90.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 3.54,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 82.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 8.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 0.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 89.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.61,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_size_9",
            "value": 0.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_size_9",
            "value": 3.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 7.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 0.85,
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
          "id": "8e71e29df2ba01f9d5320fc7131b708537d44f1a",
          "message": "Also test the player simulator shooting a charged crossbow\n\nThe existing crossbow tests match the crossbow on its data, which is what\nthe click aspects do by default. A loaded crossbow carries the projectile\nit holds in its data, so it no longer matches the crossbow that is being\nclicked with, and is charged once without ever being shot.\n\nAdds a test that matches without data, so the crossbow keeps being clicked\nwith after it has been loaded, which shoots it. It checks that several\narrows are shot, and that every arrow that leaves the network ends up\neither in the crossbow or in the world.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01M33ptG2Reko7AGmxBjZQYj",
          "timestamp": "2026-09-20T12:06:34Z",
          "tree_id": "9e1b0d9cd5347b121256b89aa7e4050ae89977dc",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/8e71e29df2ba01f9d5320fc7131b708537d44f1a"
        },
        "date": 1789906318867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 7.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_deep_size_9",
            "value": 1.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_deep_size_9",
            "value": 3.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 6.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.76,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 46.94,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.88,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 110.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.86,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 4,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 106.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 3.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 10.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.88,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 1.12,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 113.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.86,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_size_9",
            "value": 0.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_size_9",
            "value": 4.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 9.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1.12,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}