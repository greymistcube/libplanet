window.BENCHMARK_DATA = {
  "lastUpdate": 1687334659319,
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
          "id": "18cc285cffeaed343ba3bc79a86a96bba93fafe2",
          "message": "Added BlockProtocolVersion to IActionContext",
          "timestamp": "2023-06-21T16:41:11+09:00",
          "tree_id": "b2895b8b288da583d37e3a26a24c1fe1c342d8a9",
          "url": "https://github.com/greymistcube/libplanet/commit/18cc285cffeaed343ba3bc79a86a96bba93fafe2"
        },
        "date": 1687334641611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 13198217.1,
            "unit": "ns",
            "range": "± 3526633.156502016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30295466.78888889,
            "unit": "ns",
            "range": "± 11050399.473112272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 89643922.15625,
            "unit": "ns",
            "range": "± 45183473.56022112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125637827.92222223,
            "unit": "ns",
            "range": "± 24980364.397068843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231735741.91111112,
            "unit": "ns",
            "range": "± 17464720.014557354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73835.49425287357,
            "unit": "ns",
            "range": "± 10583.64792352583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369306.16483516485,
            "unit": "ns",
            "range": "± 45018.65435060442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322772.14835164836,
            "unit": "ns",
            "range": "± 38078.5556764999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306803.7315789474,
            "unit": "ns",
            "range": "± 26521.53465299578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4373417.829896907,
            "unit": "ns",
            "range": "± 307275.4972233021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3888733.25,
            "unit": "ns",
            "range": "± 159236.56179517327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19753.2,
            "unit": "ns",
            "range": "± 3718.1566314734796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101438.98947368421,
            "unit": "ns",
            "range": "± 17445.947597184793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117077.8021978022,
            "unit": "ns",
            "range": "± 11840.20304745168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110154.3085106383,
            "unit": "ns",
            "range": "± 12163.791552418164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8024.1505376344085,
            "unit": "ns",
            "range": "± 1534.9758385454102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23447.673684210527,
            "unit": "ns",
            "range": "± 4900.139866527706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814001.0326086956,
            "unit": "ns",
            "range": "± 389380.5502296317"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3382604.33908046,
            "unit": "ns",
            "range": "± 450505.65363300324"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2866234.8333333335,
            "unit": "ns",
            "range": "± 439338.19345636666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9233818.083333334,
            "unit": "ns",
            "range": "± 2451645.5523470105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3794928.433333333,
            "unit": "ns",
            "range": "± 452107.65674895927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4307273.965909091,
            "unit": "ns",
            "range": "± 604749.7476553945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5235479.302083333,
            "unit": "ns",
            "range": "± 611322.0602385176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4904772.455555555,
            "unit": "ns",
            "range": "± 608565.8277660216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8179779.615789474,
            "unit": "ns",
            "range": "± 623799.5336353994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6817778.959435096,
            "unit": "ns",
            "range": "± 180040.4330627565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2420093.939583333,
            "unit": "ns",
            "range": "± 178155.49078020264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1564671.7596484376,
            "unit": "ns",
            "range": "± 93546.43885483503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3802326.6435746173,
            "unit": "ns",
            "range": "± 251193.88995718386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856453.0950382313,
            "unit": "ns",
            "range": "± 32862.88946317158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 880689.8711480035,
            "unit": "ns",
            "range": "± 18172.54918071909"
          }
        ]
      }
    ]
  }
}