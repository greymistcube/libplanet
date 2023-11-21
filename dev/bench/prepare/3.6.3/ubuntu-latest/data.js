window.BENCHMARK_DATA = {
  "lastUpdate": 1700533857127,
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
          "id": "3dd68b79479d07038eaddb6a0d4c74d9dcb66d4b",
          "message": "Prepare 3.6.3",
          "timestamp": "2023-11-21T11:19:57+09:00",
          "tree_id": "bd6e4b1ea8d66955ebd09d534ee5832113ea0f64",
          "url": "https://github.com/greymistcube/libplanet/commit/3dd68b79479d07038eaddb6a0d4c74d9dcb66d4b"
        },
        "date": 1700533850982,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196796.4054054054,
            "unit": "ns",
            "range": "± 9871.512568405593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192483.8596491228,
            "unit": "ns",
            "range": "± 8312.6848581778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162826.76315789475,
            "unit": "ns",
            "range": "± 3476.8061468042965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3110820.214285714,
            "unit": "ns",
            "range": "± 46410.05202486363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2879142.0714285714,
            "unit": "ns",
            "range": "± 24407.25749716602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13391.709677419354,
            "unit": "ns",
            "range": "± 2186.5771274670033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65712.125,
            "unit": "ns",
            "range": "± 7977.412299407424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54972.67010309279,
            "unit": "ns",
            "range": "± 6380.44242314233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64347,
            "unit": "ns",
            "range": "± 19249.597076744783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3414.319587628866,
            "unit": "ns",
            "range": "± 1140.2215843348877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13734.4375,
            "unit": "ns",
            "range": "± 2284.529498087424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3643487.816145833,
            "unit": "ns",
            "range": "± 50205.82237853743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1166206.6215444712,
            "unit": "ns",
            "range": "± 7545.625972295806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743064.6391927083,
            "unit": "ns",
            "range": "± 11320.505877483904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903556.051983173,
            "unit": "ns",
            "range": "± 5558.086375487074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614125.251813616,
            "unit": "ns",
            "range": "± 1675.627942940438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562812.8290264423,
            "unit": "ns",
            "range": "± 2255.228613735225"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39067.915789473685,
            "unit": "ns",
            "range": "± 5224.642411998996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2464821.777777778,
            "unit": "ns",
            "range": "± 67211.29198701734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2680858.7666666666,
            "unit": "ns",
            "range": "± 44491.87576154721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3175076,
            "unit": "ns",
            "range": "± 44896.24240719611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3068755.023809524,
            "unit": "ns",
            "range": "± 111221.45528047516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6622228.805555556,
            "unit": "ns",
            "range": "± 220502.38223356093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5751036,
            "unit": "ns",
            "range": "± 44388.00682443574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14726450.5,
            "unit": "ns",
            "range": "± 98986.60042788231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36789201.692307696,
            "unit": "ns",
            "range": "± 99563.40957850649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75839358.66666667,
            "unit": "ns",
            "range": "± 677196.5762440524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151456332.16666666,
            "unit": "ns",
            "range": "± 514446.7075493641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955221.5384615385,
            "unit": "ns",
            "range": "± 75691.37535593804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1872278.528169014,
            "unit": "ns",
            "range": "± 87398.86265375897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1405006.7142857143,
            "unit": "ns",
            "range": "± 124717.82277804101"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5690106.581081081,
            "unit": "ns",
            "range": "± 285298.4408012245"
          }
        ]
      }
    ]
  }
}