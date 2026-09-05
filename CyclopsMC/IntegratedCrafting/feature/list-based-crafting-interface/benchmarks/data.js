window.BENCHMARK_DATA = {
  "lastUpdate": 1788588573741,
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
          "id": "bc1dea8c775a6883bd13d9006cc6a7cb8378c425",
          "message": "Center the variable slots and shorten the list interface name\n\nThe single slot of the list interface sat in the top-left corner. The first\nslot's x position is now derived from the slot count, which centers one slot\nand leaves the nine-slot row exactly where it was.\n\n\"List-Based Crafting Interface\" ran into the settings button in the gui title,\nso it becomes \"List Crafting Interface\".\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01Bn8brBLvFiJsfnBHpwf8ZN",
          "timestamp": "2026-09-05T04:50:46Z",
          "tree_id": "a42945131753ad6ad060aae5d89f2db23947e93a",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/bc1dea8c775a6883bd13d9006cc6a7cb8378c425"
        },
        "date": 1788584027894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 45.66,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.11,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.44,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.43,
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
            "value": 0.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.24,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.45,
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
          "id": "c3108ae2baea99091b7a570e6f1ab7bb90786a2b",
          "message": "Use the part update interval instead of a reload throttle, and cut reload cost\n\nThe list interface had its own config to throttle how often invalidations were\nacted on. The part's update interval already governs this, so that config is\ngone. The list interface now has its own minimum update interval config\ninstead, defaulting to 20 ticks, which is what the settings gui exposes.\n\nReload cost is cut so the interval is a preference rather than a necessity,\nmeasured against a machine reader on a crafting table (987 recipes):\n\n* Validation results are cached per part until it fully reloads, when the\n  target may have changed. The cache is keyed by identity, as recipe handlers\n  hand out the same instances on every read while hashing a recipe by value\n  turned out to be expensive.\n* A slot whose recipes did not change no longer syncs to the client, posts a\n  contents-updated event, or touches the network recipe index.\n* The network index diff uses sets rather than repeated list scans.\n\nAt the default cap of 256 recipes, a repeated reload goes from ~1.4 ms plus\nnetwork work to ~0.3 ms with none. Uncapped at 987 recipes, from ~9 ms to\n~2.7 ms.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01Bn8brBLvFiJsfnBHpwf8ZN",
          "timestamp": "2026-09-05T05:22:52Z",
          "tree_id": "566e0809736ac484ebcce39f1ea25bf4ee263579",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/c3108ae2baea99091b7a570e6f1ab7bb90786a2b"
        },
        "date": 1788585918696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 36.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 1.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.57,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.22,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 0.72,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.33,
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
          "id": "bb4f62f36178fa057278efc73bd26cfcc0fab016",
          "message": "Raise the list recipe limit to a runaway guard\n\nThe attuned crafting interface already exposes every recipe of its target with\nno limit at all, and indexing those 987 recipes of a crafting table costs it\nthe same as it costs a list interface (~95-100 ms for a network remove+add in\nboth cases). Limiting lists to 256 was therefore inconsistent: it withheld\nsomething the mod already allows elsewhere.\n\nThe limit now defaults to 4096, which no regular machine reaches. It stays as a\nguard against a computed list that runs away, since a list is not bounded by a\nreal machine the way an attuned interface is. Set it to 0 for no limit.\n\nThe machine reader game test asserted against the limit, which made it pass\nfor the wrong reason once the limit exceeded the machine's recipe count. It now\nasserts that the interface exposes exactly the recipes its target holds.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01Bn8brBLvFiJsfnBHpwf8ZN",
          "timestamp": "2026-09-05T06:05:34Z",
          "tree_id": "84d71a5e8aedcd35eb644002da34bbde2e33baae",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/bb4f62f36178fa057278efc73bd26cfcc0fab016"
        },
        "date": 1788588573259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.4,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 46.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.4,
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
            "value": 1.12,
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