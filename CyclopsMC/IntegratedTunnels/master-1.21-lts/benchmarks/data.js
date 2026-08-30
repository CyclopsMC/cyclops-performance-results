window.BENCHMARK_DATA = {
  "lastUpdate": 1788111866002,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedTunnels",
  "entries": {
    "Integrated Tunnels Network Benchmark": [
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
          "id": "428f0b5e287df461ea0f2a691eb6b9a06687fe70",
          "message": "Run performance tests in CI (#376)\n\nAdd a performance benchmarking setup mirroring the one of Integrated Dynamics,\nmeasuring what Integrated Tunnels adds on top of a network:\ningredient observation, ingredient transfer, index querying, and world interaction.\n\nAdds 15 benchmark presets across 5 groups:\n- Storage observation: item, fluid and energy interfaces observing filled\n  containers, plus a variant with few but completely filled containers.\n- Active transfer: items, fluids and energy continuously exported and imported\n  again, plus predicate-driven and filtering-interface variants.\n- Index scaling: many distinct item types queried by itemstack exporters.\n- Topology churn: interfaces added and removed one per tick after warmup.\n- World-interacting parts: block churn, entity item churn, and player simulators.\n\nAll presets are also exposed through a new\n`/integratedtunnels generatetunnels <preset> <size>` command,\nso they can be used for manual profiling in a real world.\n\nResults are tracked in CyclopsMC/cyclops-performance-results under\nCyclopsMC/IntegratedTunnels/<branch>/benchmarks.",
          "timestamp": "2026-08-25T19:06:18+02:00",
          "tree_id": "6ae772e546d000ccd8fb338d9e0efacdcc965af8",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/428f0b5e287df461ea0f2a691eb6b9a06687fe70"
        },
        "date": 1787678207646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 27.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 8.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
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
            "value": 0.5,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.4,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 63.93,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.62,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 142.1,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 4.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 133.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.92,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 9.9,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 0.92,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 140.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.97,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.26,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 9.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.1,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 0.9,
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
          "id": "4b9eb3d4759173ef03675c407ec5457e91b1cc86",
          "message": "Add match block option to world block importer aspects (#380)\n\nCloses #347",
          "timestamp": "2026-08-25T19:36:53+02:00",
          "tree_id": "a8059aed3f0148a79ad17cdc8de45b1c40bcafb5",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/4b9eb3d4759173ef03675c407ec5457e91b1cc86"
        },
        "date": 1787679673699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 16.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.18,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 5.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.22,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 0.57,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 36.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 80.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.57,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 2.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 0.61,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 77.08,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 3.49,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 0.81,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 0.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 80.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.51,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 0.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 5.6,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 0.55,
            "unit": "tick time (ms)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14236702+Jack-McKalling@users.noreply.github.com",
            "name": "Jack McKalling",
            "username": "Jack-McKalling"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69fe9f0314508cdc98e8759c731acaa5259b69e7",
          "message": "Fix grammar in new matchblock aspect property description (#383)",
          "timestamp": "2026-08-26T12:42:26+02:00",
          "tree_id": "ea8aaaf97172e5e1ae29ce3037869cd0d3161010",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/69fe9f0314508cdc98e8759c731acaa5259b69e7"
        },
        "date": 1787741292570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 23.49,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 7.58,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.32,
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
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.86,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 50.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.88,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 112.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.99,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 3.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.21,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 106.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.96,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 12.6,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.71,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 1.08,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 113.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.91,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 9.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1.28,
            "unit": "tick time (ms)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@gmail.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "rubensworks@gmail.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "56b11f8aa250ee53017f5d29b752bdd3181a4ee8",
          "message": "Add game tests for non-default interface sides, #381",
          "timestamp": "2026-08-26T18:44:16+02:00",
          "tree_id": "7348eeee9574707d10f4899ace2c732c0e40b831",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/56b11f8aa250ee53017f5d29b752bdd3181a4ee8"
        },
        "date": 1787763614644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 24.58,
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
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 9.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 65.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.8,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 147.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.91,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 3.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 136.97,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 2.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 15.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 1.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 145.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.9,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 9.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1.1,
            "unit": "tick time (ms)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rubensworks@gmail.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "rubensworks@gmail.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "d778f670dc7b8f569b25c27849deaf441684f791",
          "message": "Add regression game test for detached filtered interface\n\nRelated to CyclopsMC/IntegratedDynamics#1711\nAccompanies #385",
          "timestamp": "2026-08-27T19:49:59+02:00",
          "tree_id": "d90c5cf714f552c8b6606f2d1f3665c822152116",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/d778f670dc7b8f569b25c27849deaf441684f791"
        },
        "date": 1787853402516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 28.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.26,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 9.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 63.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 144.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.78,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 4.57,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.08,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 132.58,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 10.58,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 0.99,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 146.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.72,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 9.95,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 0.98,
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
            "email": "rubensworks@users.noreply.github.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "854963413d808316246c7539a8dcff69ade62816",
          "message": "Avoid constructing block place contexts for unused replaceability checks\n\nTunnelItemHelpers#placeItems and #pickUpItems, TunnelFluidHelpers#placeFluids\nand ItemStorageBlockWrapper#getItemStacks eagerly called\nBlockState#canBeReplaced with a freshly constructed BlockPlaceContext (plus a\nBlockHitResult and a Vec3), even when the surrounding condition could never\nuse the result. That is the case on every tick of a world block or fluid\nexporter or importer with the default ignoreReplacable = false.\n\nThese checks are now only evaluated when they can still influence the result.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01SzSKkG1wgcUdBPY7ucN11A",
          "timestamp": "2026-08-30T19:38:01+02:00",
          "tree_id": "0c95011cb6a1562ff269be34497cd7228074132a",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/854963413d808316246c7539a8dcff69ade62816"
        },
        "date": 1788111865554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 29.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.33,
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
            "value": 9.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 0.96,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 62.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 139.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 5.81,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 133.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 14.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 0.93,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 140,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.15,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 10.61,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 0.91,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}