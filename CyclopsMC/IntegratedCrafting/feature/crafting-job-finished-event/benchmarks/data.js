window.BENCHMARK_DATA = {
  "lastUpdate": 1788375465252,
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
            "email": "rubensworks@gmail.com",
            "name": "Ruben Taelman",
            "username": "rubensworks"
          },
          "distinct": true,
          "id": "5dbf41c37e3a4430a2cd24d3d0482ef0276e13cc",
          "message": "Emit an event when a crafting job is completed\n\nAdds CraftingJobFinishedEvent, which is emitted on the NeoForge event bus\nfor jobs that ran to completion. Cancelled jobs are excluded: cancelling\nmarks the job, because the crafting interface finalizes cancelled jobs\nthrough the regular finishing logic a tick later.\n\nCrafting jobs now also carry a notifyInitiator flag, so that initiators can\nindicate that they want to be notified once the job is completed, and an\ninitialAmount, because the regular amount is decremented to zero while the\njob runs.\n\nRelated to CyclopsMC/IntegratedCrafting#175\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01QNDY2pZtkXqJrhztYCvNbh",
          "timestamp": "2026-09-02T16:05:20Z",
          "tree_id": "ad877d4b769955e06ce11caf11f04242babd0ee4",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/5dbf41c37e3a4430a2cd24d3d0482ef0276e13cc"
        },
        "date": 1788365532748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.9,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 39.2,
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
            "value": 0.2,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 0.31,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 0.92,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.12,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.45,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 0.91,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.42,
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
          "id": "e7662c1a5681e7cc7e9efdb8b074a7dc17e9e661",
          "message": "Deprecate the crafting job scheduling method without notify flag\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01QNDY2pZtkXqJrhztYCvNbh",
          "timestamp": "2026-09-02T18:50:23Z",
          "tree_id": "c28a209a41fe19f9a6bbd8320b1d7bb440259ed8",
          "url": "https://github.com/CyclopsMC/IntegratedCrafting/commit/e7662c1a5681e7cc7e9efdb8b074a7dc17e9e661"
        },
        "date": 1788375464702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: craft_nested_size_9",
            "value": 3.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_nested_size_9",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_remove_size_9",
            "value": 0.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_remove_size_9",
            "value": 47.65,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_size_9",
            "value": 0.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_size_9",
            "value": 0.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_append_size_9",
            "value": 0.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_append_size_9",
            "value": 0.6,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_satisfied_idle_size_9",
            "value": 0.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_satisfied_idle_size_9",
            "value": 1.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_recipe_index_size_9",
            "value": 1.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_recipe_index_size_9",
            "value": 0.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.15,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: interfaces_crafting_idle_recipes_size_9",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: craft_simple_size_9",
            "value": 1.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: craft_simple_size_9",
            "value": 0.46,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}