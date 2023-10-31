window.BENCHMARK_DATA = {
  "lastUpdate": 1698748931045,
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
          "id": "22489754688a856bb4a3731eb9762658143f5edd",
          "message": "Reorganize and cleanup BlockChain",
          "timestamp": "2023-10-31T19:24:42+09:00",
          "tree_id": "a0f54d531e483644a84c33c7d7c4c6a4b54cf95a",
          "url": "https://github.com/greymistcube/libplanet/commit/22489754688a856bb4a3731eb9762658143f5edd"
        },
        "date": 1698748921721,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58598.36559139785,
            "unit": "ns",
            "range": "± 3544.2416181037706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6413309.403245192,
            "unit": "ns",
            "range": "± 22597.689701025356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929944.9027944712,
            "unit": "ns",
            "range": "± 6289.759044384427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380993.0146484375,
            "unit": "ns",
            "range": "± 503.09569965982104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063078.83203125,
            "unit": "ns",
            "range": "± 22927.668964567045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001809.8022135417,
            "unit": "ns",
            "range": "± 13155.897891855602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 909437.2970920139,
            "unit": "ns",
            "range": "± 17158.728597626225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10304861.8,
            "unit": "ns",
            "range": "± 172049.870453806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28023595.25,
            "unit": "ns",
            "range": "± 365901.1856799903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68152428.35714285,
            "unit": "ns",
            "range": "± 302866.86234881566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138182502,
            "unit": "ns",
            "range": "± 3246488.732991809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272980237.4285714,
            "unit": "ns",
            "range": "± 664016.7105520896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4383680.714285715,
            "unit": "ns",
            "range": "± 59363.31783495281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4670454.8,
            "unit": "ns",
            "range": "± 128314.15343423666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5541995.785714285,
            "unit": "ns",
            "range": "± 94168.59011628565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5463890.891304348,
            "unit": "ns",
            "range": "± 209606.31437904178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12880539.625,
            "unit": "ns",
            "range": "± 378546.40233775275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332741.5416666667,
            "unit": "ns",
            "range": "± 8067.492169889717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321742.71794871794,
            "unit": "ns",
            "range": "± 11087.792359994553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299401.71698113205,
            "unit": "ns",
            "range": "± 12146.055867231074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5359867.428571428,
            "unit": "ns",
            "range": "± 27832.433860002766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4960318.214285715,
            "unit": "ns",
            "range": "± 85409.97751675204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24956.021739130436,
            "unit": "ns",
            "range": "± 1908.5750451105978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109550.15463917526,
            "unit": "ns",
            "range": "± 8196.478914169238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97104.87096774194,
            "unit": "ns",
            "range": "± 7075.110165413323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103961.16842105263,
            "unit": "ns",
            "range": "± 9818.976485696037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7208.791666666667,
            "unit": "ns",
            "range": "± 1664.006654317835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25387.15053763441,
            "unit": "ns",
            "range": "± 2222.788896204968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1758074.9625,
            "unit": "ns",
            "range": "± 89819.46021831778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3345454.8,
            "unit": "ns",
            "range": "± 73263.94531856789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2715044.7719298247,
            "unit": "ns",
            "range": "± 111024.15763601335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11061101.625,
            "unit": "ns",
            "range": "± 345678.3520630264"
          }
        ]
      }
    ]
  }
}