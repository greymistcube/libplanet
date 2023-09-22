window.BENCHMARK_DATA = {
  "lastUpdate": 1695371813359,
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
          "id": "00fb4dd87d26d008731bfbdbe97a00982680d720",
          "message": "Working",
          "timestamp": "2023-09-22T16:35:38+09:00",
          "tree_id": "208fc59fc38921dd618f815411eb39303f6b3279",
          "url": "https://github.com/greymistcube/libplanet/commit/00fb4dd87d26d008731bfbdbe97a00982680d720"
        },
        "date": 1695371789625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316106,
            "unit": "ns",
            "range": "± 120067.9250687003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2419741.26984127,
            "unit": "ns",
            "range": "± 110134.69705381537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1958944.5652173914,
            "unit": "ns",
            "range": "± 110501.27776510539"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9017591.011235954,
            "unit": "ns",
            "range": "± 525874.0986638882"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49063.82978723404,
            "unit": "ns",
            "range": "± 2936.5275032200357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7274107.142857143,
            "unit": "ns",
            "range": "± 79233.98129091326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21016320,
            "unit": "ns",
            "range": "± 516230.8430666782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51212106.666666664,
            "unit": "ns",
            "range": "± 727410.2649288154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103011966.66666667,
            "unit": "ns",
            "range": "± 1596215.5424926917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202706993.33333334,
            "unit": "ns",
            "range": "± 3055254.415982563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4490494.114583333,
            "unit": "ns",
            "range": "± 22804.43166789789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1437503.125,
            "unit": "ns",
            "range": "± 6488.13411451301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058230.95703125,
            "unit": "ns",
            "range": "± 3975.2950223890402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652409.9609375,
            "unit": "ns",
            "range": "± 7699.616715898253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840024.4270833334,
            "unit": "ns",
            "range": "± 3009.5722006246606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767916.7410714285,
            "unit": "ns",
            "range": "± 2454.352510811598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3210664.705882353,
            "unit": "ns",
            "range": "± 62787.42849066673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414621.4285714286,
            "unit": "ns",
            "range": "± 45283.37152050117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4069196.296296296,
            "unit": "ns",
            "range": "± 111231.46511625581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3947955.9322033897,
            "unit": "ns",
            "range": "± 174074.65825109842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10489737.5,
            "unit": "ns",
            "range": "± 342079.6246246381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249226.31578947368,
            "unit": "ns",
            "range": "± 10147.422725496599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244336.76470588235,
            "unit": "ns",
            "range": "± 11654.451515318722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213536.17021276595,
            "unit": "ns",
            "range": "± 8280.816635109779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4026676.923076923,
            "unit": "ns",
            "range": "± 49949.79402436934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3738553.3333333335,
            "unit": "ns",
            "range": "± 67666.38611248431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20917.021276595744,
            "unit": "ns",
            "range": "± 1800.5607428769936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85217.0731707317,
            "unit": "ns",
            "range": "± 4325.171940578502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74571.875,
            "unit": "ns",
            "range": "± 4640.501404964089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86240.40404040404,
            "unit": "ns",
            "range": "± 16550.706990213497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5309.473684210527,
            "unit": "ns",
            "range": "± 792.5280965836981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21115.151515151516,
            "unit": "ns",
            "range": "± 2140.0154317755464"
          }
        ]
      }
    ]
  }
}