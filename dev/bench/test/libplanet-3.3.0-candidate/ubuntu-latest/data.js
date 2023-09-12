window.BENCHMARK_DATA = {
  "lastUpdate": 1694478278779,
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
          "id": "4c727b97eb46a893a810b8db3570fa3ca521d994",
          "message": "Logging for trie set count",
          "timestamp": "2023-09-12T09:05:30+09:00",
          "tree_id": "c99165fc6bcea0ce8fc7832bb6306319b8b19f85",
          "url": "https://github.com/greymistcube/libplanet/commit/4c727b97eb46a893a810b8db3570fa3ca521d994"
        },
        "date": 1694478269572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1712509.4545454546,
            "unit": "ns",
            "range": "± 182166.87211171177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3275233.758241758,
            "unit": "ns",
            "range": "± 216661.11716479363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141092.2421052633,
            "unit": "ns",
            "range": "± 172772.98662226374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5885247.084210526,
            "unit": "ns",
            "range": "± 373546.06622125715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368331.53,
            "unit": "ns",
            "range": "± 46328.950872195295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 360722.8958333333,
            "unit": "ns",
            "range": "± 42552.91086894777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296156.6666666667,
            "unit": "ns",
            "range": "± 31245.426606875033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5042572.176470588,
            "unit": "ns",
            "range": "± 238393.36382097309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4729555.486111111,
            "unit": "ns",
            "range": "± 232228.02831329705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35731.26,
            "unit": "ns",
            "range": "± 10493.646999297176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126889.84848484848,
            "unit": "ns",
            "range": "± 17589.887023435283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129817.9574468085,
            "unit": "ns",
            "range": "± 19796.381331056982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130959.36458333333,
            "unit": "ns",
            "range": "± 24500.880499374445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6737.023809523809,
            "unit": "ns",
            "range": "± 876.7221672014578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30173.939393939392,
            "unit": "ns",
            "range": "± 10445.123451384228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75129.15789473684,
            "unit": "ns",
            "range": "± 13424.458351382209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9671514.51764706,
            "unit": "ns",
            "range": "± 520963.3308454273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26766962.10769231,
            "unit": "ns",
            "range": "± 1241767.8141161557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69024218.03125,
            "unit": "ns",
            "range": "± 2114324.3611006127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138258544.07142857,
            "unit": "ns",
            "range": "± 2438982.7995112874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277439936.04761904,
            "unit": "ns",
            "range": "± 6143710.295995584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3959267.494845361,
            "unit": "ns",
            "range": "± 241341.66510870037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4205263.93814433,
            "unit": "ns",
            "range": "± 294355.3057434308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5488052.9387755105,
            "unit": "ns",
            "range": "± 359253.510883441"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4603042.79787234,
            "unit": "ns",
            "range": "± 320195.55743654293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8049309.5051546395,
            "unit": "ns",
            "range": "± 473644.83707734366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998193.9125,
            "unit": "ns",
            "range": "± 80588.38484141922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1902668.8033854167,
            "unit": "ns",
            "range": "± 26134.87401661164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1294669.8307291667,
            "unit": "ns",
            "range": "± 5896.015692004137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3116864.3406808036,
            "unit": "ns",
            "range": "± 27550.669251537372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020077.6334635416,
            "unit": "ns",
            "range": "± 13906.969535137625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 955796.6221354167,
            "unit": "ns",
            "range": "± 10336.910256188834"
          }
        ]
      }
    ]
  }
}