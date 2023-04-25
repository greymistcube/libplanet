window.BENCHMARK_DATA = {
  "lastUpdate": 1682414438259,
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
          "id": "4ae90c4687157fd081e727e541775595a2de8a89",
          "message": "Additional tool in preparation for adding Registry to ActionTypeLoader",
          "timestamp": "2023-04-25T18:04:40+09:00",
          "tree_id": "7ba5f549a63ce670d2474b5a812ea7f0d4952b89",
          "url": "https://github.com/greymistcube/libplanet/commit/4ae90c4687157fd081e727e541775595a2de8a89"
        },
        "date": 1682414421611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8548980.666666666,
            "unit": "ns",
            "range": "± 81706.31041695851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21191433.14285714,
            "unit": "ns",
            "range": "± 368099.3252493883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52517686.421052635,
            "unit": "ns",
            "range": "± 1102241.808756556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106985420.46153846,
            "unit": "ns",
            "range": "± 987609.1429121151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224658696.13333333,
            "unit": "ns",
            "range": "± 1304874.2819931442"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83488.79166666667,
            "unit": "ns",
            "range": "± 5992.714945606728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366365.2,
            "unit": "ns",
            "range": "± 7849.3807070501125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343163.1551724138,
            "unit": "ns",
            "range": "± 14353.836734539478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336538.63636363635,
            "unit": "ns",
            "range": "± 8025.229755176896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4354131.333333333,
            "unit": "ns",
            "range": "± 100739.2650823567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3959426.3333333335,
            "unit": "ns",
            "range": "± 81570.37973359173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27113.757894736842,
            "unit": "ns",
            "range": "± 2881.003898303172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128907.36842105263,
            "unit": "ns",
            "range": "± 10401.12037444395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127336.08108108108,
            "unit": "ns",
            "range": "± 6351.569224197604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135376.22916666666,
            "unit": "ns",
            "range": "± 13821.803448083616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10812.21875,
            "unit": "ns",
            "range": "± 1166.959384158813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28143.881443298967,
            "unit": "ns",
            "range": "± 2610.438602368459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1748676.7626262626,
            "unit": "ns",
            "range": "± 194506.37897008104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3109514.6511627906,
            "unit": "ns",
            "range": "± 114029.4798833646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2733104.4183673467,
            "unit": "ns",
            "range": "± 263911.49053656304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7158187.864583333,
            "unit": "ns",
            "range": "± 411059.9344415059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3428570.285714286,
            "unit": "ns",
            "range": "± 43191.71618438403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3610049.814814815,
            "unit": "ns",
            "range": "± 151707.12903322242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531258.512820513,
            "unit": "ns",
            "range": "± 127592.43199176117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5113480.184615385,
            "unit": "ns",
            "range": "± 228297.49215900377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7908484.9,
            "unit": "ns",
            "range": "± 224816.0129697401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6930938.061979166,
            "unit": "ns",
            "range": "± 43983.65054024116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2109770.4617745536,
            "unit": "ns",
            "range": "± 19075.18845166963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1297586.7234375,
            "unit": "ns",
            "range": "± 7339.6493364195685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2857838.5047286185,
            "unit": "ns",
            "range": "± 55038.76860135942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864806.4149088542,
            "unit": "ns",
            "range": "± 5601.84221922956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724688.4102260044,
            "unit": "ns",
            "range": "± 1880.9957251945173"
          }
        ]
      }
    ]
  }
}