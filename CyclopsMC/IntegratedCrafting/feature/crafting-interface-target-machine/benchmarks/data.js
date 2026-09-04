window.BENCHMARK_DATA = {
  "lastUpdate": 1788549381356,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedCrafting",
  "entries": {
    "Integrated Crafting Network Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rubensworks@gmail.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "committer": {
            "email": "noreply@anthropic.com",
            "name": "Claude",
            "username": "claude"
          },
          "distinct": true,
          "id": "2ddd33220a4cc00484958a91038d9a86f5fb9d41",
          "message": "Expose the machine that a crafting interface targets\n\nCrafting interfaces know which block they are targeting, but only exposed\ntheir own (center) position through getPosition(). Callers that want the\nmachine had to look the part up again and re-derive its target, which\nduplicates the logic that decides where a part points at.\n\nAdd ICraftingInterface#getTargetMachineItem(), which the part state answers\nfrom the target it already holds. It is a default method returning an empty\nstack, so other implementations keep working.\n\nNeeded by CyclopsMC/IntegratedTerminals#181, to show the crafting machine in\nthe storage terminal's tooltips.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01RM86uiqD4soLkMyjC9Eeid",
          "timestamp": "2026-09-04T19:06:57Z",
          "tree_id": "6d04442d21811a5aebf559c2e464be28d47f18e3",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/2ddd33220a4cc00484958a91038d9a86f5fb9d41"
        },
        "date": 1788549380885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 4.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 43.84,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.47,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.11,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.47,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.1,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 0.93,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.5,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}