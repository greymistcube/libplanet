window.BENCHMARK_DATA = {
  "lastUpdate": 1694080068675,
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
          "id": "a3e6a6f8dfd6d77a0266a59859eb29e337503444",
          "message": "Parallel on Account level",
          "timestamp": "2023-09-07T18:31:10+09:00",
          "tree_id": "e11338d9a9bb3de5c4fbbb380eeebf73e8491981",
          "url": "https://github.com/greymistcube/libplanet/commit/a3e6a6f8dfd6d77a0266a59859eb29e337503444"
        },
        "date": 1694080043749,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297952.6315789474,
            "unit": "ns",
            "range": "± 28438.22483171106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2349675.352112676,
            "unit": "ns",
            "range": "± 113966.35809158755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608081.6326530613,
            "unit": "ns",
            "range": "± 102112.5802269531"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4088426.3157894737,
            "unit": "ns",
            "range": "± 140849.41294375452"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46503.57142857143,
            "unit": "ns",
            "range": "± 2488.5010937573784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7120030.769230769,
            "unit": "ns",
            "range": "± 16225.770891567558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19622315.789473683,
            "unit": "ns",
            "range": "± 413972.3974469231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49893741.025641024,
            "unit": "ns",
            "range": "± 1715706.4576433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97471400,
            "unit": "ns",
            "range": "± 1813328.7949435504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192678016.66666666,
            "unit": "ns",
            "range": "± 4922096.935662479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4365599.158653846,
            "unit": "ns",
            "range": "± 13806.669462594025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400601.09375,
            "unit": "ns",
            "range": "± 6144.400173976985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1037416.5234375,
            "unit": "ns",
            "range": "± 3320.5571861981043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613704.609375,
            "unit": "ns",
            "range": "± 16723.497552861514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833812.5260416666,
            "unit": "ns",
            "range": "± 4840.977567278857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750944.0987723215,
            "unit": "ns",
            "range": "± 2752.8992200082034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3165176.923076923,
            "unit": "ns",
            "range": "± 46764.59048336597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3197568.888888889,
            "unit": "ns",
            "range": "± 105093.25474034568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3899314.814814815,
            "unit": "ns",
            "range": "± 107741.5986505309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3652454.1666666665,
            "unit": "ns",
            "range": "± 93599.35887539005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5683217.5,
            "unit": "ns",
            "range": "± 200512.71509973292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240861.53846153847,
            "unit": "ns",
            "range": "± 8088.3156591733705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 229637.5,
            "unit": "ns",
            "range": "± 6674.7420063298205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204652.63157894736,
            "unit": "ns",
            "range": "± 4470.9393023853545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3890377.777777778,
            "unit": "ns",
            "range": "± 73850.89553446072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3604242.8571428573,
            "unit": "ns",
            "range": "± 55691.46757304534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18079.381443298967,
            "unit": "ns",
            "range": "± 1541.1669107320579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78788.88888888889,
            "unit": "ns",
            "range": "± 4221.678787552223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65578.57142857143,
            "unit": "ns",
            "range": "± 2006.9836056324202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72486.73469387754,
            "unit": "ns",
            "range": "± 13555.343890537883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4344.210526315789,
            "unit": "ns",
            "range": "± 553.4640985634534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15903.260869565218,
            "unit": "ns",
            "range": "± 1151.0579068081715"
          }
        ]
      }
    ]
  }
}