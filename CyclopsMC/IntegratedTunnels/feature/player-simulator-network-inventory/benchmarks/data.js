window.BENCHMARK_DATA = {
  "lastUpdate": 1789756426273,
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
          "id": "86a899d6c28792fa0190fa3f529c32e98296b01d",
          "message": "Allow the Player Simulator to use the network as its inventory\n\nItems such as bows consume other items (arrows) from the player\ninventory, which was always empty for the simulated player.\n\nThe new \"Network Inventory\" property on the player click aspects fills\nthe simulated player's inventory with a copy of the network's items\nbefore clicking. Afterwards, only the items that were actually consumed\nare removed from the network, and anything that changed is inserted back\ninto the network.\n\nThe property is disabled by default, as iterating the network's items on\nevery click is not free, and because network items should not be\nconsumable by accident in existing setups.\n\nThe player inventory only holds 36 stacks, so only the first items of the\nnetwork are made available. Equal items are merged, so that as many\ndifferent items as possible fit.\n\nCloses #280\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01M33ptG2Reko7AGmxBjZQYj",
          "timestamp": "2026-09-18T18:23:19Z",
          "tree_id": "4b914bdce99503f33cd87d347903507920d44a66",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/86a899d6c28792fa0190fa3f529c32e98296b01d"
        },
        "date": 1789756425475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 8.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 4.96,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.21,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.1,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 33.8,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 76.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 1.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 2.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 71.78,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 1.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 5.94,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.15,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 0.98,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 76.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 1.69,
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
            "value": 7.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.21,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}