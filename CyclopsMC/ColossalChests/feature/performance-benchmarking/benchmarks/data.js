window.BENCHMARK_DATA = {
  "lastUpdate": 1789277185075,
  "repoUrl": "https://github.com/CyclopsMC/ColossalChests",
  "entries": {
    "Colossal Chests Benchmark": [
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
          "id": "f9e757c3389470ed8e32c927ac9860e74e0eb34a",
          "message": "Add performance benchmarking setup\n\nAdds benchmark game tests that measure the operations scaling with chest\nsize: structure formation and revalidation, inventory construction and\nmemory, container opening, per-tick change synchronization, shift-clicking,\nand the payload sent when a chest is opened.\n\nThey are skipped unless PERFORMANCE_BENCHMARK_ENABLED is set, so regular\ngame test runs are unaffected. Results are tracked over time via a\nperformance workflow, mirroring the setup in Integrated Dynamics.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_019ParaU4Neoi7UaZ3xU8Rv6",
          "timestamp": "2026-09-13T04:58:47Z",
          "tree_id": "aa1a3387057f6be774f9880b99312f5b3f3be950",
          "url": "https://github.com/CyclopsMC/ColossalChests/commit/f9e757c3389470ed8e32c927ac9860e74e0eb34a"
        },
        "date": 1789277184337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "CHEST LOAD: formation_wood_size_5",
            "value": 3.022814,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: formation_wood_size_9",
            "value": 23.104433,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: formation_wood_interfaces_size_9",
            "value": 61.88762,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: revalidation_wood_size_9",
            "value": 5.524101,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: revalidation_netherite_size_9",
            "value": 15.428293,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: inventory_construction_wood_size_19683",
            "value": 2.024389,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST MEMORY: inventory_memory_wood_size_19683",
            "value": 36,
            "unit": "bytes per slot"
          },
          {
            "name": "CHEST LOAD: inventory_construction_netherite_size_98415",
            "value": 11.207423,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST MEMORY: inventory_memory_netherite_size_98415",
            "value": 36,
            "unit": "bytes per slot"
          },
          {
            "name": "CHEST LOAD: container_open_maxsize_size_1080000",
            "value": 189.741208,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_broadcast_maxsize_size_1080000",
            "value": 22.084976,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_quickmove_maxsize_size_1080000",
            "value": 80.810643,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: client_inventory_fill_wood_size_19683",
            "value": 1.826818,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_open_wood_size_19683",
            "value": 3.458638,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_broadcast_wood_size_19683",
            "value": 0.767784,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_quickmove_wood_size_19683",
            "value": 3.527769,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_open_netherite_size_98415",
            "value": 5.895378,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_broadcast_netherite_size_98415",
            "value": 1.219375,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_quickmove_netherite_size_98415",
            "value": 6.327724,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST LOAD: container_sync_empty_wood_size_19683",
            "value": 13.341975,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST MEMORY: container_sync_empty_wood_size_19683",
            "value": 21,
            "unit": "bytes per slot"
          },
          {
            "name": "CHEST LOAD: container_sync_full_wood_size_19683",
            "value": 29.670696,
            "unit": "operation time (ms)"
          },
          {
            "name": "CHEST MEMORY: container_sync_full_wood_size_19683",
            "value": 55,
            "unit": "bytes per slot"
          }
        ]
      }
    ]
  }
}