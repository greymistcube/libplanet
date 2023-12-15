window.BENCHMARK_DATA = {
  "lastUpdate": 1702616721225,
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
          "id": "1f4871ef2e97be88a7680bdb95d7c790d6def685",
          "message": "Revert \"Added BlockHashType and TxIdType; refactored AddressType\"\n\nThis reverts commit e4c0db0113e283ef7c6ddec34289e6d9dd345b26.",
          "timestamp": "2023-12-15T13:52:20+09:00",
          "tree_id": "0ff2e84ad8519699dbabc9df3474a2991791b687",
          "url": "https://github.com/greymistcube/libplanet/commit/1f4871ef2e97be88a7680bdb95d7c790d6def685"
        },
        "date": 1702616690156,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 928133,
            "unit": "ns",
            "range": "± 97644.97541211387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1658150,
            "unit": "ns",
            "range": "± 71138.07722834538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1300797.93814433,
            "unit": "ns",
            "range": "± 109510.67012261623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5143002.702702703,
            "unit": "ns",
            "range": "± 173059.83950081558"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34003.38983050847,
            "unit": "ns",
            "range": "± 1515.0925886917246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4954621.428571428,
            "unit": "ns",
            "range": "± 43457.48016645215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12960966.666666666,
            "unit": "ns",
            "range": "± 109505.39886668776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33285846.153846152,
            "unit": "ns",
            "range": "± 202583.565536894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63715221.428571425,
            "unit": "ns",
            "range": "± 820027.9011937727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126475550,
            "unit": "ns",
            "range": "± 641363.4655949776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3296270.8426339286,
            "unit": "ns",
            "range": "± 11344.424547482855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062310.9375,
            "unit": "ns",
            "range": "± 3270.845731573467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739996.3932291666,
            "unit": "ns",
            "range": "± 1933.288222610339"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928843.2542067308,
            "unit": "ns",
            "range": "± 2486.19896635186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 601717.5846354166,
            "unit": "ns",
            "range": "± 1676.2964849331222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569464.5717075893,
            "unit": "ns",
            "range": "± 898.164006321225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090360.5263157894,
            "unit": "ns",
            "range": "± 66944.11763704105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2245852.6315789474,
            "unit": "ns",
            "range": "± 75970.72955845812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2675816.6666666665,
            "unit": "ns",
            "range": "± 77937.61025303524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2482204,
            "unit": "ns",
            "range": "± 75019.26272359544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6358696.25,
            "unit": "ns",
            "range": "± 330914.10734729294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 166914.0625,
            "unit": "ns",
            "range": "± 7432.444260037974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159829.8245614035,
            "unit": "ns",
            "range": "± 6188.727220643096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140564.51612903227,
            "unit": "ns",
            "range": "± 3690.2166501075767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2677756.25,
            "unit": "ns",
            "range": "± 48511.73011069935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472271.4285714286,
            "unit": "ns",
            "range": "± 42492.631552584935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10008.510638297872,
            "unit": "ns",
            "range": "± 1312.7709817112975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49414.4578313253,
            "unit": "ns",
            "range": "± 2511.1523217352255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43562.79069767442,
            "unit": "ns",
            "range": "± 1426.1208216720786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51197.916666666664,
            "unit": "ns",
            "range": "± 10446.43458860654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2191.4893617021276,
            "unit": "ns",
            "range": "± 401.78621996314945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9605.263157894737,
            "unit": "ns",
            "range": "± 996.5225089591613"
          }
        ]
      }
    ]
  }
}