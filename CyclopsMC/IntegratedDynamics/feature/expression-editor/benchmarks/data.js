window.BENCHMARK_DATA = {
  "lastUpdate": 1792239897112,
  "repoUrl": "https://github.com/CyclopsMC/IntegratedDynamics",
  "entries": {
    "Integrated Dynamics Network Benchmark": [
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
          "id": "94d840d7630e88d45f9542ee79a4c093221fe7d9",
          "message": "Edit expressions in place instead of in a separate text mode\n\nThe text of the expression in the panel can now be edited directly,\ninstead of switching to a separate text box with an Edit button. It keeps\nthe colors of the read-only view, and clicking a part places the caret\nand opens that operator in the slots. Typing makes a draft: Enter applies\nit, Escape reverts it, and slots wait until then. Applying keeps the open\noperator if it is still there.\n\nUndo and Redo go back and forth through all changes to the expression,\nfrom slots, parameters and text alike, and are reset when another\nexpression is opened.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T09:38:01Z",
          "tree_id": "fdf2513330da4dbb4c3cd91aa52086640b09c247",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/94d840d7630e88d45f9542ee79a4c093221fe7d9"
        },
        "date": 1792230379927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: control_size_0",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: control_size_0",
            "value": 0.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 9.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.9,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 34.25,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_32",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_32",
            "value": 0.24,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 16.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 1.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.22,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 17.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 18.53,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.69,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 2.93,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 6.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 2.71,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.00233,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.001266,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.001291,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.597446,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.000587,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000812,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.001106,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000871,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.014649,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000409,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000959,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000174,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000842,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001525,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000688,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.00205,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001359,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.00097,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.61,
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
          "id": "f4c2bc0198485641f63a2209169ed579fa10ebb9",
          "message": "Use icon buttons for undo, redo and copy, and drop the hover hint\n\nThe font has no undo, redo or copy symbols, so the icons are drawn\npixel by pixel, in the same colors and with the same shadow as the text\nof text buttons. Copying briefly shows a check mark instead of the\n\"Copied\" text. The hint when hovering the expression is removed, as\nthe button tooltips and the book already explain the editor.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T10:09:00Z",
          "tree_id": "b540021cd0d0c1fd2bb7d23a7423a83330ddba38",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/f4c2bc0198485641f63a2209169ed579fa10ebb9"
        },
        "date": 1792232007849,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: control_size_0",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: control_size_0",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 9.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.62,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 26.96,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_32",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_32",
            "value": 0.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.4,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 17.06,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.72,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.19,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.19,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 15.04,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 18.48,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.79,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 2.93,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 7.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.83,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 3.23,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.001523,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.000731,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.001444,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.00074,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.575103,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.00092,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.00123,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000349,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000861,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000173,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001402,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000857,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000762,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000824,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.01431,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001343,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000649,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.00175,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 2.85,
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
          "id": "71dc2eb9cb13755e216ee97e833b4b346ee53666",
          "message": "Move the expression panel buttons right of its title\n\nWith icons, Undo, Redo and Copy fit right of the title, so the row of\nbuttons below the expression is removed and the expression gets that\nheight instead. Revert and Apply become a cross and a check there, with\ntooltips naming Esc and Enter. The add parameter button moves down a\npixel so its plus is in line with the Parameters label.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T10:28:49Z",
          "tree_id": "4dc7fb5fa6a2c9710a6a18b3522f342db65a7fea",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/71dc2eb9cb13755e216ee97e833b4b346ee53666"
        },
        "date": 1792233126711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: control_size_0",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: control_size_0",
            "value": 0.17,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 3.96,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.39,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 13.72,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_32",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_32",
            "value": 0.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.24,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 9.64,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.11,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 6.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.21,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 12.47,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.37,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 1.8,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 4.19,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 0.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 1.98,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.001174,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.000767,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.000586,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.000519,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.313401,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000472,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.000536,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000179,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000485,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000163,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.00125,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.000779,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000561,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.008028,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.00036,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000432,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000521,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.000746,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 1.79,
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
          "id": "3be5a74ee61201e3caaddbf8ea1c882f24a9e548",
          "message": "Drop the Parameters label in the expression panel\n\nThe label sat right under the title like a second heading, while\nparameters are optional. The chips now sit under the title on their\nown, followed by a plus to add another, which reads \"+ Parameter\" while\nthere are none. Chips are as tall as the button, so they line up.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T12:15:29Z",
          "tree_id": "02c34d6b6315665f1b4206c6c2defafafc57b4d6",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/3be5a74ee61201e3caaddbf8ea1c882f24a9e548"
        },
        "date": 1792239620467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: control_size_0",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: control_size_0",
            "value": 0.32,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 9.74,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.89,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 19.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_32",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_32",
            "value": 0.21,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 18.38,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.81,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.18,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.21,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 18.16,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 18.64,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.93,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 4.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 9.77,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 1.05,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 4.13,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.001855,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.001376,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.001178,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.000745,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.001387,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.000958,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.586214,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.015279,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000423,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.00097,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000899,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000176,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.001006,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001617,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.001504,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000705,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.00217,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000966,
            "unit": "operation time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 3.51,
            "unit": "tick time (ms)"
          }
        ]
      }
    ],
    "Integrated Dynamics Client Benchmark": [
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
          "id": "94d840d7630e88d45f9542ee79a4c093221fe7d9",
          "message": "Edit expressions in place instead of in a separate text mode\n\nThe text of the expression in the panel can now be edited directly,\ninstead of switching to a separate text box with an Edit button. It keeps\nthe colors of the read-only view, and clicking a part places the caret\nand opens that operator in the slots. Typing makes a draft: Enter applies\nit, Escape reverts it, and slots wait until then. Applying keeps the open\noperator if it is still there.\n\nUndo and Redo go back and forth through all changes to the expression,\nfrom slots, parameters and text alike, and are reset when another\nexpression is opened.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T09:38:01Z",
          "tree_id": "fdf2513330da4dbb4c3cd91aa52086640b09c247",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/94d840d7630e88d45f9542ee79a4c093221fe7d9"
        },
        "date": 1792230642336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CLIENT FRAME: control_size_16",
            "value": 17.02,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: control_size_16",
            "value": 0.109,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: cables_size_16",
            "value": 34.458,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: cables_size_16",
            "value": 1.17,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: displaypanels_size_12",
            "value": 28.377,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: displaypanels_size_12",
            "value": 0.672,
            "unit": "frame time (ms)"
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
          "id": "f4c2bc0198485641f63a2209169ed579fa10ebb9",
          "message": "Use icon buttons for undo, redo and copy, and drop the hover hint\n\nThe font has no undo, redo or copy symbols, so the icons are drawn\npixel by pixel, in the same colors and with the same shadow as the text\nof text buttons. Copying briefly shows a check mark instead of the\n\"Copied\" text. The hint when hovering the expression is removed, as\nthe button tooltips and the book already explain the editor.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T10:09:00Z",
          "tree_id": "b540021cd0d0c1fd2bb7d23a7423a83330ddba38",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/f4c2bc0198485641f63a2209169ed579fa10ebb9"
        },
        "date": 1792232271606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CLIENT FRAME: control_size_16",
            "value": 17.088,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: control_size_16",
            "value": 0.089,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: cables_size_16",
            "value": 35.285,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: cables_size_16",
            "value": 1.673,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: displaypanels_size_12",
            "value": 28.205,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: displaypanels_size_12",
            "value": 0.688,
            "unit": "frame time (ms)"
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
          "id": "71dc2eb9cb13755e216ee97e833b4b346ee53666",
          "message": "Move the expression panel buttons right of its title\n\nWith icons, Undo, Redo and Copy fit right of the title, so the row of\nbuttons below the expression is removed and the expression gets that\nheight instead. Revert and Apply become a cross and a check there, with\ntooltips naming Esc and Enter. The add parameter button moves down a\npixel so its plus is in line with the Parameters label.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T10:28:49Z",
          "tree_id": "4dc7fb5fa6a2c9710a6a18b3522f342db65a7fea",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/71dc2eb9cb13755e216ee97e833b4b346ee53666"
        },
        "date": 1792233382932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CLIENT FRAME: control_size_16",
            "value": 18.407,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: control_size_16",
            "value": 0.105,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: cables_size_16",
            "value": 39.088,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: cables_size_16",
            "value": 1.768,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: displaypanels_size_12",
            "value": 31.666,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: displaypanels_size_12",
            "value": 0.693,
            "unit": "frame time (ms)"
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
          "id": "3be5a74ee61201e3caaddbf8ea1c882f24a9e548",
          "message": "Drop the Parameters label in the expression panel\n\nThe label sat right under the title like a second heading, while\nparameters are optional. The chips now sit under the title on their\nown, followed by a plus to add another, which reads \"+ Parameter\" while\nthere are none. Chips are as tall as the button, so they line up.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-10-17T12:15:29Z",
          "tree_id": "02c34d6b6315665f1b4206c6c2defafafc57b4d6",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/3be5a74ee61201e3caaddbf8ea1c882f24a9e548"
        },
        "date": 1792239896641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CLIENT FRAME: control_size_16",
            "value": 16.232,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: control_size_16",
            "value": 0.09,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: cables_size_16",
            "value": 33.752,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: cables_size_16",
            "value": 1.27,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: displaypanels_size_12",
            "value": 27.845,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: displaypanels_size_12",
            "value": 0.72,
            "unit": "frame time (ms)"
          }
        ]
      }
    ]
  }
}