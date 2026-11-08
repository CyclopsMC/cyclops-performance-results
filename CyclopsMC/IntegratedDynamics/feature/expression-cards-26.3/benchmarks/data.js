window.BENCHMARK_DATA = {
  "lastUpdate": 1794164842243,
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
          "id": "d4c669e83db999b337423692ce53a9327d0e32fb",
          "message": "Merge remote-tracking branch 'origin/master-26-lts' into master-26\n\nPorts the expressions of the Logic Programmer to Minecraft 26.3:\n- Keys and mouse buttons use the SDL codes of InputConstants instead of GLFW.\n  Undo and redo read the shortcut key, so they follow the keyboard layout, and\n  Ctrl, or Cmd on macOS, comes from the key event, as Minecraft#hasControlDown\n  no longer means Cmd on macOS.\n- The expression text field starts SDL text input when it gets focus, without\n  which no typed characters arrive.\n- Blocks without properties are written as their id alone in 26.3, so a typed\n  compound with only an id is kept when it is written as that id.\n- MinMaxBounds, the screen, the left and top of containers, advancement icons and\n  color names follow their 26.3 replacements.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-11-08T18:34:43Z",
          "tree_id": "0a90a72cd9ddf175e19b03364192b2a380c378d6",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/d4c669e83db999b337423692ce53a9327d0e32fb"
        },
        "date": 1794164653795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "NETWORK LOAD: idle_size_10",
            "value": 1.7,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: idle_size_10",
            "value": 0.42,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_10",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_10",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_appendparts_size_10",
            "value": 0.11,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_appendparts_size_10",
            "value": 24.56,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_size_10",
            "value": 0.73,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_size_10",
            "value": 0.09,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_size_32",
            "value": 0,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_size_32",
            "value": 0.03,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_appendparts_size_10",
            "value": 0.51,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_appendparts_size_10",
            "value": 11.52,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_append_size_10",
            "value": 0.29,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_append_size_10",
            "value": 11.27,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_choice_size_10",
            "value": 0.55,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_choice_size_10",
            "value": 0.07,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: redstoneioclock_remove_size_10",
            "value": 0.33,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: redstoneioclock_remove_size_10",
            "value": 10.92,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_append_size_10",
            "value": 0.02,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_append_size_10",
            "value": 3.46,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: empty_remove_size_10",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: empty_remove_size_10",
            "value": 4.14,
            "unit": "tick time (ms)"
          },
          {
            "name": "NETWORK LOAD: control_size_0",
            "value": 0.01,
            "unit": "tick time (ms)"
          },
          {
            "name": "SERVER LOAD: control_size_0",
            "value": 0.43,
            "unit": "tick time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_first_size_5000",
            "value": 0.000308,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_nonempty_all_size_5000",
            "value": 0.012511,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_size_5000",
            "value": 0.001346,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_single_item_size_5000",
            "value": 0.001491,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_single_item_size_5000",
            "value": 0.000785,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_few_items_size_5000",
            "value": 0.000846,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_size_5000",
            "value": 0.001186,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_size_5000",
            "value": 0.001182,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_few_items_size_5000",
            "value": 0.000775,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_heavy_components_size_5000",
            "value": 0.002756,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_heavy_components_size_5000",
            "value": 0.002091,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_plain_size_5000",
            "value": 0.000875,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_plain_size_5000",
            "value": 0.000837,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_plain_size_5000",
            "value": 0.000476,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_exact_mixed_size_5000",
            "value": 0.000958,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_mixed_size_5000",
            "value": 0.000869,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_modification_mixed_size_5000",
            "value": 0.000659,
            "unit": "operation time (ms)"
          },
          {
            "name": "INDEX LOAD: index_lookup_item_single_item_size_5000",
            "value": 0.481893,
            "unit": "operation time (ms)"
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
          "id": "d4c669e83db999b337423692ce53a9327d0e32fb",
          "message": "Merge remote-tracking branch 'origin/master-26-lts' into master-26\n\nPorts the expressions of the Logic Programmer to Minecraft 26.3:\n- Keys and mouse buttons use the SDL codes of InputConstants instead of GLFW.\n  Undo and redo read the shortcut key, so they follow the keyboard layout, and\n  Ctrl, or Cmd on macOS, comes from the key event, as Minecraft#hasControlDown\n  no longer means Cmd on macOS.\n- The expression text field starts SDL text input when it gets focus, without\n  which no typed characters arrive.\n- Blocks without properties are written as their id alone in 26.3, so a typed\n  compound with only an id is kept when it is written as that id.\n- MinMaxBounds, the screen, the left and top of containers, advancement icons and\n  color names follow their 26.3 replacements.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01MHtucHo4Qy2pTfBMgeE54y",
          "timestamp": "2026-11-08T18:34:43Z",
          "tree_id": "0a90a72cd9ddf175e19b03364192b2a380c378d6",
          "url": "https://github.com/CyclopsMC/IntegratedDynamics/commit/d4c669e83db999b337423692ce53a9327d0e32fb"
        },
        "date": 1794164841614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CLIENT FRAME: control_size_16",
            "value": 16.871,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: control_size_16",
            "value": 0.013,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: cables_size_16",
            "value": 31.769,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: cables_size_16",
            "value": 0.706,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT FRAME: displaypanels_size_12",
            "value": 57.295,
            "unit": "frame time (ms)"
          },
          {
            "name": "CLIENT BLOCK ENTITIES: displaypanels_size_12",
            "value": 0.801,
            "unit": "frame time (ms)"
          }
        ]
      }
    ]
  }
}