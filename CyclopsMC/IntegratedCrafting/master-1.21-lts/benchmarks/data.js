window.BENCHMARK_DATA = {
  "lastUpdate": 1788536263930,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedCrafting",
  "entries": {
    "Integrated Crafting Network Benchmark": [
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
          "id": "5cb884c6eee184aab2e67b7037ae1615b152a983",
          "message": "Add performance benchmarking setup (#217)\n\nMeasures what Integrated Crafting adds on top of an Integrated Dynamics\nnetwork: crafting interfaces, crafting job scheduling and execution, and\nthe network's recipe index. Mirrors the setup of Integrated Dynamics and\nIntegrated Tunnels, and reuses ID's measurement infrastructure.\n\nAdds eight benchmark presets on a shared cable grid: three idle presets\nthat isolate the standing cost of crafting interfaces and of crafting\nwriters that have nothing to do, three active presets that continuously\ncraft (flat, dependency-resolving, and with a 2.45x larger recipe index\nat constant crafting work), and two topology churn presets.\n\nAll presets are also exposed through /integratedcrafting generatecrafting\n<preset> <size> for manual profiling in a real world.\n\nEvery preset asserts after warmup that none of its parts is deactivated\nor in an aspect error state, and that every filled recipe slot is valid,\nso that a preset cannot silently degrade into an expensive no-op.\n\nStorage chests are deliberately only filled two thirds: a crafting\ninterface buffers its results until it can push them into network\nstorage and stops ticking its jobs entirely while that buffer is\nnon-empty, so full chests jam every interface after a single craft.\n\nWithout PERFORMANCE_BENCHMARK_ENABLED, all benchmark game tests succeed\nimmediately without generating anything.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01DF81jeWnWNR3ECHzNd9mRh",
          "timestamp": "2026-08-26T18:51:33+02:00",
          "tree_id": "fdac07526165ea627091c6c6ba59f3b9cd41b263",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/5cb884c6eee184aab2e67b7037ae1615b152a983"
        },
        "date": 1787764074140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 45.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 2.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.39,
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
          "id": "8fcb621ca78da4e4c638e00ad58a6c5e8fe1463b",
          "message": "Skip the crafting network lookup of an idle crafting interface\n\nCraftingJobHandler.update looked the crafting network capability up to find a\njob to start, even when the handler has no pending jobs at all, which is what\nevery idle crafting interface does on every tick. It also repeated that same\nlookup for every finished job instead of once.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MxquU3sDjDpKbeHrVyrV1t",
          "timestamp": "2026-08-29T16:35:40+02:00",
          "tree_id": "8b89c82b3a4ea176e76a88b56aff7bd8b392ef9b",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/8fcb621ca78da4e4c638e00ad58a6c5e8fe1463b"
        },
        "date": 1788014299607,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.76,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.4,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 50.86,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.47,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.62,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.63,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.5,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.11,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.18,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.41,
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
          "id": "f63692a5680a3058469217a8527f0ac176f4ffae",
          "message": "Document clientdevbridge-cli in AGENTS.md",
          "timestamp": "2026-09-01T20:28:22+02:00",
          "tree_id": "00b77c4e6545643475e4726a7326f4fb22d5845b",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/f63692a5680a3058469217a8527f0ac176f4ffae"
        },
        "date": 1788287707810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 2.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 43.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.63,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.45,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.18,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 0.87,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.4,
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
          "id": "04a586ec90c24332c4050412e78f0e1ab6069f62",
          "message": "Expose crafting job progress and measured recipe durations (#220)\n\nRequired for CyclopsMC/IntegratedTerminals#145",
          "timestamp": "2026-09-02T20:32:43+02:00",
          "tree_id": "2271496977ac0ca7e7d94eed09d4c98a315a0b64",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/04a586ec90c24332c4050412e78f0e1ab6069f62"
        },
        "date": 1788374405366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 4.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 46.61,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.4,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.57,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.12,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.35,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 0.96,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.37,
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
          "id": "4a097a68ffba488dc82ef4934b09dc1da082e82f",
          "message": "Emit an event when a crafting job is completed (#222)\n\nRequired for #175",
          "timestamp": "2026-09-02T20:53:26+02:00",
          "tree_id": "c28a209a41fe19f9a6bbd8320b1d7bb440259ed8",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/4a097a68ffba488dc82ef4934b09dc1da082e82f"
        },
        "date": 1788375356056,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.97,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.5,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 41.8,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.4,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.94,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.12,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.44,
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
          "id": "adad3ba5ddfbf20b005e055a2c4a948a85ef4910",
          "message": "Estimate a duration for recipes that are crafted instantly (#223)\n\nRequired for CyclopsMC/IntegratedTerminals#145",
          "timestamp": "2026-09-04T17:35:19+02:00",
          "tree_id": "9c16a655d98d38b87ab24003d96b0b02663752cc",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/adad3ba5ddfbf20b005e055a2c4a948a85ef4910"
        },
        "date": 1788536263559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 2.97,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 47.08,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.59,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.59,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 0.97,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.45,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.24,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.4,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}