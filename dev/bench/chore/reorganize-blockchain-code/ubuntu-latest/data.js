window.BENCHMARK_DATA = {
  "lastUpdate": 1680508636934,
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
          "id": "feb9a091c2bf34984c125cb6fa6641b2d70b6620",
          "message": "[skip changelog] Separate block validation related code",
          "timestamp": "2023-04-03T16:39:37+09:00",
          "tree_id": "68febb310cb06ee0c765e5c728e72392a040515b",
          "url": "https://github.com/greymistcube/libplanet/commit/feb9a091c2bf34984c125cb6fa6641b2d70b6620"
        },
        "date": 1680508628400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3785350.536082474,
            "unit": "ns",
            "range": "± 232655.61726424203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4084481.847826087,
            "unit": "ns",
            "range": "± 156999.86787991147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5130376.492537313,
            "unit": "ns",
            "range": "± 242758.67086573067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5139365.610526316,
            "unit": "ns",
            "range": "± 322472.1701359964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9754330.852272727,
            "unit": "ns",
            "range": "± 534126.1218627585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9213243.173913043,
            "unit": "ns",
            "range": "± 229714.57733351152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24434752,
            "unit": "ns",
            "range": "± 751036.9497181879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62109641.62903226,
            "unit": "ns",
            "range": "± 2793788.854696451"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119939198.375,
            "unit": "ns",
            "range": "± 3650587.569572863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242638864.04166666,
            "unit": "ns",
            "range": "± 6142210.142802496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693701.84375,
            "unit": "ns",
            "range": "± 142656.4810862889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3249997.927536232,
            "unit": "ns",
            "range": "± 155770.61890771228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2652350.3636363638,
            "unit": "ns",
            "range": "± 143806.7804021645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7196140.421686747,
            "unit": "ns",
            "range": "± 379235.9571799891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64542.20430107527,
            "unit": "ns",
            "range": "± 8221.419516116504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7075480.4953125,
            "unit": "ns",
            "range": "± 117618.06176365835"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2231044.449479167,
            "unit": "ns",
            "range": "± 27075.78814506243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1592347.8694010417,
            "unit": "ns",
            "range": "± 23780.329582449176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3246103.4059709823,
            "unit": "ns",
            "range": "± 55583.98532551215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987239.7006510417,
            "unit": "ns",
            "range": "± 13949.51171387982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939169.0384114584,
            "unit": "ns",
            "range": "± 7357.598200146315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 430823.6818181818,
            "unit": "ns",
            "range": "± 20244.388245907776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346493.77777777775,
            "unit": "ns",
            "range": "± 15910.269943011597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298316.03225806454,
            "unit": "ns",
            "range": "± 13515.818553800958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6508735.555555556,
            "unit": "ns",
            "range": "± 272981.1751344747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4878142.377049181,
            "unit": "ns",
            "range": "± 217536.11347254226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24351.122448979593,
            "unit": "ns",
            "range": "± 6079.000940817487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106237.53608247422,
            "unit": "ns",
            "range": "± 9584.680263383261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96728.96842105263,
            "unit": "ns",
            "range": "± 9918.448065645505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 225574.76842105263,
            "unit": "ns",
            "range": "± 21318.27171573251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12036.373737373737,
            "unit": "ns",
            "range": "± 5896.713906024893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25253.676767676767,
            "unit": "ns",
            "range": "± 5717.061803930841"
          }
        ]
      }
    ]
  }
}