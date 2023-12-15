window.BENCHMARK_DATA = {
  "lastUpdate": 1702614283357,
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
          "id": "ff955410c709f0d5f5a7b9533f237af4c6fac400",
          "message": "Additional error logging for better debugging",
          "timestamp": "2023-12-15T13:11:53+09:00",
          "tree_id": "b5f8ba557541555efe7169019c7b0391f4389796",
          "url": "https://github.com/greymistcube/libplanet/commit/ff955410c709f0d5f5a7b9533f237af4c6fac400"
        },
        "date": 1702614258300,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 912802.0833333334,
            "unit": "ns",
            "range": "± 98770.31834052029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1655116.8831168832,
            "unit": "ns",
            "range": "± 79866.54559918492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1285775,
            "unit": "ns",
            "range": "± 114637.78930545592"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5297472.580645162,
            "unit": "ns",
            "range": "± 238723.51190759026"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33819.642857142855,
            "unit": "ns",
            "range": "± 1452.5738463915627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5045086.666666667,
            "unit": "ns",
            "range": "± 45154.573675426545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12825100,
            "unit": "ns",
            "range": "± 100978.20132512336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32170952.173913043,
            "unit": "ns",
            "range": "± 784497.798750933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63359171.428571425,
            "unit": "ns",
            "range": "± 282031.5426401027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129204913.33333333,
            "unit": "ns",
            "range": "± 945753.3549403631"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3244750.330528846,
            "unit": "ns",
            "range": "± 4420.54478231342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035470.4622395834,
            "unit": "ns",
            "range": "± 9635.071771240187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728580.4762620192,
            "unit": "ns",
            "range": "± 2374.7696261059414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936882.1514423077,
            "unit": "ns",
            "range": "± 2611.004542281269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600019.8542668269,
            "unit": "ns",
            "range": "± 865.6202960060882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566667.67578125,
            "unit": "ns",
            "range": "± 933.2600231164186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2128625,
            "unit": "ns",
            "range": "± 69411.71319432642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2226720.6896551726,
            "unit": "ns",
            "range": "± 95987.215447374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2666428,
            "unit": "ns",
            "range": "± 93020.06595024405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2514911.267605634,
            "unit": "ns",
            "range": "± 118686.84552130786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6308143.258426966,
            "unit": "ns",
            "range": "± 349299.336919234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 163246,
            "unit": "ns",
            "range": "± 6286.630128085073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 155757.27272727274,
            "unit": "ns",
            "range": "± 6109.21752113466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141098.27586206896,
            "unit": "ns",
            "range": "± 3907.5586724098107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2676042.1052631577,
            "unit": "ns",
            "range": "± 56692.37961518946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2395283.3333333335,
            "unit": "ns",
            "range": "± 36504.943259138774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9478.947368421053,
            "unit": "ns",
            "range": "± 1163.8065512316937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54811.57894736842,
            "unit": "ns",
            "range": "± 5770.243977988237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45846.26865671642,
            "unit": "ns",
            "range": "± 2190.9820932154125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58910.10101010101,
            "unit": "ns",
            "range": "± 15129.25598713918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2740.721649484536,
            "unit": "ns",
            "range": "± 537.9518399732304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10894.186046511628,
            "unit": "ns",
            "range": "± 1009.7588123394256"
          }
        ]
      }
    ]
  }
}