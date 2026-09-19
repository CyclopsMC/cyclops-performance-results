window.BENCHMARK_DATA = {
  "lastUpdate": 1789801794831,
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
          "id": "25cc243d2f47536996927d6f08f4925670689e22",
          "message": "Expose the network to the Player Simulator without copying items\n\nThe first implementation copied network items into the simulated player's\ninventory before each click, and worked out afterwards what had been\nconsumed. That capped the reachable items at the inventory size, so items\nsitting behind the first ~35 network items were never available, and the\nafter-the-fact accounting could not be trusted when the network changed\nduring the click.\n\nThe simulated player now gets an inventory that exposes the network as\nadditional slots. The network is only iterated when something actually\nreads those slots, and items are only really taken out of the network at\nthe moment they are taken out of the inventory, so no item is ever handed\nout that was not removed from the network first. Anything that is not\nconsumed is inserted back into the network after the click, like the\nclicked-with item already was.\n\nPlayer#getProjectile reads the inventory field directly, so the inventory\nobject itself is replaced, which needs an access transformer. Its\ngetProjectile is overridden to take the projectile out of the network\nbefore handing it to the weapon.\n\nAlso adds a game test where the arrows sit behind more items than fit in a\nplayer inventory, which fails with any such cap in place.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01M33ptG2Reko7AGmxBjZQYj",
          "timestamp": "2026-09-18T19:04:50Z",
          "tree_id": "9d22b085fb67a35f242968f32161f52ba1c8cd64",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/25cc243d2f47536996927d6f08f4925670689e22"
        },
        "date": 1789758717739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 9.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.6,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 7.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 52.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 2.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 116.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 2.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 4.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 110.76,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 2.11,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 7.44,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 1.18,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 119.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 2.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 9.15,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1.19,
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
          "id": "e780c39598b211ca92533d73d0943af31fe6fc62",
          "message": "Benchmark the player simulator's network inventory\n\nAdds two presets that measure the cost of reaching the network's items\nthrough the simulated player's inventory: player simulators continuously\nshoot a bow with arrows that they take out of the network.\n\nAll cells except one hold a completely filled chest, and the single\nremaining cell is the only one holding bows and arrows. Because every\nother container is full, the items that are not consumed always end up in\nthat same cell again, which keeps both presets in a steady state.\n\nThe two presets only differ in the priority of that one interface:\nplayer_simulator_bow gives it the highest priority, so the arrows are\nfound as soon as the network is iterated, while player_simulator_bow_deep\ngives it the lowest priority, so every click has to iterate over all slots\nof all other interfaces first. The difference between both is therefore\nthe cost of iterating the network.\n\nAlso applies the review suggestions on the inventory's javadoc and on the\nproperty's description.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01M33ptG2Reko7AGmxBjZQYj",
          "timestamp": "2026-09-19T07:03:58Z",
          "tree_id": "0e9fab97d1fb40bd37accd3b624ca75e372a45f0",
          "url": "https://github.com/CyclopsMC/IntegratedTunnels/commit/e780c39598b211ca92533d73d0943af31fe6fc62"
        },
        "date": 1789801794411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: interfaces_item_remove_size_9",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_remove_size_9",
            "value": 11.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_deep_size_9",
            "value": 1.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_deep_size_9",
            "value": 3.76,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_deep_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_deep_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_append_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_append_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_entityitem_churn_size_9",
            "value": 7.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_entityitem_churn_size_9",
            "value": 0.58,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_size_9",
            "value": 0.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_size_9",
            "value": 1.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_index_query_size_9",
            "value": 55.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_index_query_size_9",
            "value": 1.87,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_size_9",
            "value": 126.63,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_size_9",
            "value": 2.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: world_block_churn_size_9",
            "value": 5.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: world_block_churn_size_9",
            "value": 1.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_transfer_predicate_size_9",
            "value": 117.78,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_transfer_predicate_size_9",
            "value": 2.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: energy_transfer_size_9",
            "value": 4.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: energy_transfer_size_9",
            "value": 1.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_item_idle_size_9",
            "value": 0.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_item_idle_size_9",
            "value": 1.16,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: items_filtering_interfaces_size_9",
            "value": 126.44,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: items_filtering_interfaces_size_9",
            "value": 2.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: player_simulator_bow_size_9",
            "value": 0.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: player_simulator_bow_size_9",
            "value": 4.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_energy_idle_size_9",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_energy_idle_size_9",
            "value": 1.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: fluids_transfer_size_9",
            "value": 10.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: fluids_transfer_size_9",
            "value": 1.64,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_fluid_idle_size_9",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_fluid_idle_size_9",
            "value": 1.2,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}