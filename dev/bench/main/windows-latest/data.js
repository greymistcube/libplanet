window.BENCHMARK_DATA = {
  "lastUpdate": 1681117845636,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@planetariumhq.com",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492",
          "message": "Merge pull request #3073 from dahlia/tx-invoice",
          "timestamp": "2023-04-10T16:32:34+09:00",
          "tree_id": "25188c22e036f85cc08e8040104a7c7e52c27b11",
          "url": "https://github.com/greymistcube/libplanet/commit/9bdf6b627c267e5b374d1f68dbc8dc0c1e7ec492"
        },
        "date": 1681117823965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1281984.375,
            "unit": "ns",
            "range": "± 99702.88844269152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424303.846153846,
            "unit": "ns",
            "range": "± 99256.48684592597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2051356.25,
            "unit": "ns",
            "range": "± 116103.38660684686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5470247,
            "unit": "ns",
            "range": "± 369470.23566373263"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46151.063829787236,
            "unit": "ns",
            "range": "± 2730.020074795271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6886753.333333333,
            "unit": "ns",
            "range": "± 63306.94914086297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19329638.46153846,
            "unit": "ns",
            "range": "± 237680.58586564424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46365472.34042553,
            "unit": "ns",
            "range": "± 1777561.4769167104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91664465,
            "unit": "ns",
            "range": "± 2002389.826990949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 180063984.6153846,
            "unit": "ns",
            "range": "± 2351713.118787435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4786189.713541667,
            "unit": "ns",
            "range": "± 52088.16549859098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493536.0807291667,
            "unit": "ns",
            "range": "± 13827.775904936863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159347.5,
            "unit": "ns",
            "range": "± 4723.3581009618065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606760.8854166665,
            "unit": "ns",
            "range": "± 14906.240070490136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828554.0690104166,
            "unit": "ns",
            "range": "± 5987.440974938851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758725.1106770834,
            "unit": "ns",
            "range": "± 5577.151266990823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3047904.5454545454,
            "unit": "ns",
            "range": "± 71258.96753774541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3177102.5,
            "unit": "ns",
            "range": "± 102855.24427874849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3786038.4615384615,
            "unit": "ns",
            "range": "± 32352.602637746124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3924252.6315789474,
            "unit": "ns",
            "range": "± 158647.08149274418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6899375.308641976,
            "unit": "ns",
            "range": "± 363060.0203585022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306333.3333333333,
            "unit": "ns",
            "range": "± 6322.6018471549405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238701.92307692306,
            "unit": "ns",
            "range": "± 9106.612344122468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202742.85714285713,
            "unit": "ns",
            "range": "± 2014.071378199769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5085480,
            "unit": "ns",
            "range": "± 51570.63394718244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3550564.285714286,
            "unit": "ns",
            "range": "± 58993.11051226311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18104.255319148935,
            "unit": "ns",
            "range": "± 1149.7465726946152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81982.79569892473,
            "unit": "ns",
            "range": "± 5206.843816929248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80137,
            "unit": "ns",
            "range": "± 7941.778736212027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162244.5652173913,
            "unit": "ns",
            "range": "± 15892.671364675922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5592.783505154639,
            "unit": "ns",
            "range": "± 627.2040176251153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16830.76923076923,
            "unit": "ns",
            "range": "± 1766.0811801960676"
          }
        ]
      }
    ]
  }
}