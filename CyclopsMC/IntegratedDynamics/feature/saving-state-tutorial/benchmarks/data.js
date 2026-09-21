window.BENCHMARK_DATA = {
  "lastUpdate": 1790014349009,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedDynamics",
  "entries": {
    "Integrated Dynamics Network Benchmark": [
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
          "id": "1d2f13cafe86a13883c079248bcbfae2f8af5790",
          "message": "Add a tutorial on saving state with the Delayer\n\nAdds a \"Saving State\" section to the info book that builds up from\nwriting a Delayer history card, over a two-button latch, to a\nsingle-button toggle with rising edge detection. Each step has an\nadvancement, and game tests cover both the advancements and the\nbehaviour of the latch and toggle networks.\n\nCloses #613\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01QYua96wBFk9NEknqGfksfm",
          "timestamp": "2026-09-20T15:38:50Z",
          "tree_id": "fb64a94d438ab8fb730bc7ce183834713caa418b",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/1d2f13cafe86a13883c079248bcbfae2f8af5790"
        },
        "date": 1789919228574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 10.28,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.49,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 26.63,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.45,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 17.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.75,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.3,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 20.19,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.41,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 17.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 2.95,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 7.76,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.94,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 3.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.002445,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.001435,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.00125,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.001678,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.001157,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000924,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.597488,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000419,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000946,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000412,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000859,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.014579,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001526,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000844,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001488,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000709,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000889,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.002009,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 3.3,
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
          "id": "84818ba5e001b9233be99d168acb4bc9a25a3e62",
          "message": "Clarify the Delayer capacity and card naming in the saving state tutorial\n\nExplains why the first Delayer needs a Capacity of 1, spells out that\nthe Redstone Writer needs its own copy of the State card, and names the\nVariable Cards explicitly throughout.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01QYua96wBFk9NEknqGfksfm",
          "timestamp": "2026-09-21T18:03:26Z",
          "tree_id": "259322a128f5204d1131793b653a1a6ae2855580",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/84818ba5e001b9233be99d168acb4bc9a25a3e62"
        },
        "date": 1790014348340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 8.08,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 26.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 18.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.34,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 26.82,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 17.24,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.68,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 3.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 10.36,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.88,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 3.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.002575,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.00076,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.002091,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.000753,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.001126,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000916,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000408,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000959,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000335,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000991,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.014954,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.001172,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001587,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000712,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000909,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.614836,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.002375,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001423,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.69,
            "unit": "tick time (ms)"
          }
        ]
      }
    ]
  }
}