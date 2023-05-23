window.BENCHMARK_DATA = {
  "lastUpdate": 1684852902122,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "ef9b7fec3272cc9e82f994b5aaebab995dfe308a",
          "message": "General API cleanup",
          "timestamp": "2023-05-23T23:18:54+09:00",
          "tree_id": "565b5fb8fbdef0e8a1818599d15cee840714f42b",
          "url": "https://github.com/greymistcube/libplanet/commit/ef9b7fec3272cc9e82f994b5aaebab995dfe308a"
        },
        "date": 1684852718721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8778934.363636363,
            "unit": "ns",
            "range": "± 215192.12775554016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21759746.214285713,
            "unit": "ns",
            "range": "± 619034.6409272386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56783254.09677419,
            "unit": "ns",
            "range": "± 3695087.0563609926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112667355.57142857,
            "unit": "ns",
            "range": "± 1145198.283649031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220914617.66666666,
            "unit": "ns",
            "range": "± 3892915.964157181"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76834.91954022988,
            "unit": "ns",
            "range": "± 6579.411391674244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344703.55376344087,
            "unit": "ns",
            "range": "± 25452.90147907699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349119.7842105263,
            "unit": "ns",
            "range": "± 41842.41830143165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322658.35714285716,
            "unit": "ns",
            "range": "± 32737.22869611274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4331801.363636363,
            "unit": "ns",
            "range": "± 250790.83190085206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3706661.0714285714,
            "unit": "ns",
            "range": "± 45759.70169300677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19858.604166666668,
            "unit": "ns",
            "range": "± 4636.209718882024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100920.4375,
            "unit": "ns",
            "range": "± 17081.606855767404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108448.64893617021,
            "unit": "ns",
            "range": "± 13119.462030799112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109403.2,
            "unit": "ns",
            "range": "± 15897.739852476556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5874.118556701031,
            "unit": "ns",
            "range": "± 1102.6442691255393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18591.094736842104,
            "unit": "ns",
            "range": "± 3034.043107148584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625239.5157894737,
            "unit": "ns",
            "range": "± 145486.89581194965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3107558.1904761903,
            "unit": "ns",
            "range": "± 166283.39761006334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500873.71875,
            "unit": "ns",
            "range": "± 192977.95186201172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6660626.833333333,
            "unit": "ns",
            "range": "± 422757.0537098151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3388766.7125,
            "unit": "ns",
            "range": "± 167967.86076566787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3582740.61971831,
            "unit": "ns",
            "range": "± 173590.65750925703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4641424.551282051,
            "unit": "ns",
            "range": "± 228855.41438884125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4497612.311827957,
            "unit": "ns",
            "range": "± 261883.71829721192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8032943.926829268,
            "unit": "ns",
            "range": "± 424878.9969334633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6712897.1015625,
            "unit": "ns",
            "range": "± 188022.04252121504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905045.9428013393,
            "unit": "ns",
            "range": "± 20540.974541270814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299207.3974095394,
            "unit": "ns",
            "range": "± 25426.641956237025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638167.293108259,
            "unit": "ns",
            "range": "± 71097.16844550615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806853.1132061298,
            "unit": "ns",
            "range": "± 10828.917686210101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729804.8123372396,
            "unit": "ns",
            "range": "± 5613.923713089957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "cc37e67adfedc3fb1d9656b2734f7d350281f506",
          "message": "Changelog",
          "timestamp": "2023-05-23T23:22:22+09:00",
          "tree_id": "46e8d622c6bd7a7166d64b3f07bde91b31e44386",
          "url": "https://github.com/greymistcube/libplanet/commit/cc37e67adfedc3fb1d9656b2734f7d350281f506"
        },
        "date": 1684852881960,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9374951.608695652,
            "unit": "ns",
            "range": "± 449998.1062476563"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23026665.55172414,
            "unit": "ns",
            "range": "± 672000.3972169099"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56329546.35714286,
            "unit": "ns",
            "range": "± 893955.5291193273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116570664.26470588,
            "unit": "ns",
            "range": "± 2991910.733060724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231726143.37037036,
            "unit": "ns",
            "range": "± 5903764.146252861"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62161.188888888886,
            "unit": "ns",
            "range": "± 5028.407170445256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388472.08988764044,
            "unit": "ns",
            "range": "± 28544.962857123424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360605.8144329897,
            "unit": "ns",
            "range": "± 27231.863207207094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331828.5333333333,
            "unit": "ns",
            "range": "± 23085.11837594646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4747096.788235294,
            "unit": "ns",
            "range": "± 386483.060362599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4098037.25,
            "unit": "ns",
            "range": "± 219742.75368788463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19818.68888888889,
            "unit": "ns",
            "range": "± 1485.1066139948796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94481.84705882354,
            "unit": "ns",
            "range": "± 5113.030700144116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86107.59550561798,
            "unit": "ns",
            "range": "± 5218.178434610502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99532.36597938144,
            "unit": "ns",
            "range": "± 16216.818875160689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5035.233333333334,
            "unit": "ns",
            "range": "± 635.543981805342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17811.897727272728,
            "unit": "ns",
            "range": "± 2194.218702307952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1678833.3777777778,
            "unit": "ns",
            "range": "± 236448.69756897277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3379249.211764706,
            "unit": "ns",
            "range": "± 209583.79021170086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3009111.033333333,
            "unit": "ns",
            "range": "± 569267.6974191177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7428295.625,
            "unit": "ns",
            "range": "± 715796.6447330554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4080224.414893617,
            "unit": "ns",
            "range": "± 409651.23070502694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3983011.831578947,
            "unit": "ns",
            "range": "± 236195.76307614046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5160779.965909091,
            "unit": "ns",
            "range": "± 283465.8465127373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5057895.738636363,
            "unit": "ns",
            "range": "± 366547.4653097622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9461200.846153846,
            "unit": "ns",
            "range": "± 566614.2209345286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6543000.713341346,
            "unit": "ns",
            "range": "± 94564.90836101379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2103296.870703125,
            "unit": "ns",
            "range": "± 47200.48374595765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371698.9708333334,
            "unit": "ns",
            "range": "± 24609.70299939516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2845663.0321514425,
            "unit": "ns",
            "range": "± 43567.72937256489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870217.7333984375,
            "unit": "ns",
            "range": "± 16879.92594721405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808777.612219769,
            "unit": "ns",
            "range": "± 19766.66836625721"
          }
        ]
      }
    ]
  }
}