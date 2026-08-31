window.BENCHMARK_DATA = {
  "lastUpdate": 1788197999743,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedCrafting",
  "entries": {
    "Integrated Crafting Network Benchmark": [
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
          "id": "c1ebbd975cc45ac8fb010db5d29051758725563b",
          "message": "Unit-test the crafting operation duration measurement\n\nMakes the current tick overridable in the crafting job handler,\nso that measuring the duration of crafting operations can be tested\nwithout a running server.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_0186zEXrjMNMVXQC7wcoSiMR",
          "timestamp": "2026-08-31T17:33:27Z",
          "tree_id": "2ee0f7453e5ee14aa76273145510142a3607d02f",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/c1ebbd975cc45ac8fb010db5d29051758725563b"
        },
        "date": 1788197999434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 4.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 49.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.47,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.62,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.15,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}