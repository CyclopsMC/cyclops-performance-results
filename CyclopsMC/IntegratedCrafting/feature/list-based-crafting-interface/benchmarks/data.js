window.BENCHMARK_DATA = {
  "lastUpdate": 1788553847174,
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
          "id": "53f3f2434d928f808c7dfc4743e8b7446625db59",
          "message": "Add a list-based crafting interface\n\nA new crafting interface variant with a single variable slot that accepts a\nlist of recipes, so that a whole recipe set can be derived with logic instead\nof placed card by card. Closes #10.\n\nThe variable machinery of the existing crafting interface is extracted into\nPartTypeInterfaceCraftingVariableBase, with a per-slot recipe list instead of a\nsingle recipe, so both variants share the evaluator, invalidation, validation\nand slot messages. The container and screen are reused for both, since the\ninventory size and the accepted value type are derived from the part type.\n\nList reads are guarded: infinite lists are rejected, the number of recipes read\nfrom a list is capped, duplicates are removed, and the network index is patched\nwith only what changed. Because reader-backed list variables are invalidated on\nevery reader tick, reloads of a list slot are throttled to a configurable\nminimum interval.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01Bn8brBLvFiJsfnBHpwf8ZN",
          "timestamp": "2026-09-04T20:24:28Z",
          "tree_id": "3c27c665c76aa405cd7957a5028d0f88d2abf320",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/53f3f2434d928f808c7dfc4743e8b7446625db59"
        },
        "date": 1788553846704,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.26,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 35.81,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.08,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.63,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 0.94,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.16,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.38,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}