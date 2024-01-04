window.BENCHMARK_DATA = {
  "lastUpdate": 1704333670306,
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
          "id": "e2d0f18309be8d748fa0d3b7e36e26bbcfca0f0f",
          "message": "Release 3.9.3",
          "timestamp": "2024-01-04T10:45:57+09:00",
          "tree_id": "27d8eecf75f45f048e9556d45d30d7f023e92d47",
          "url": "https://github.com/greymistcube/libplanet/commit/e2d0f18309be8d748fa0d3b7e36e26bbcfca0f0f"
        },
        "date": 1704333655505,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689538.285714285,
            "unit": "ns",
            "range": "± 55164.17686454551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19207258.4375,
            "unit": "ns",
            "range": "± 371265.373480474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47528916.916666664,
            "unit": "ns",
            "range": "± 401746.6083994325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95179590.84615384,
            "unit": "ns",
            "range": "± 921034.0006445515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199806600.73134327,
            "unit": "ns",
            "range": "± 9358827.166070467"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51769.13829787234,
            "unit": "ns",
            "range": "± 16110.223907724318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230242.83516483515,
            "unit": "ns",
            "range": "± 20341.49580169328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262870.1382978723,
            "unit": "ns",
            "range": "± 47627.928312841206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 245069.8510638298,
            "unit": "ns",
            "range": "± 45859.634596527714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3921569.1,
            "unit": "ns",
            "range": "± 149148.29043524133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3667826.2934782607,
            "unit": "ns",
            "range": "± 214759.15355581895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13630.765957446809,
            "unit": "ns",
            "range": "± 1556.2666412326614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65927.5,
            "unit": "ns",
            "range": "± 10258.790343295466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93776.38775510204,
            "unit": "ns",
            "range": "± 12963.509860160853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92604.6888888889,
            "unit": "ns",
            "range": "± 23528.863741931775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3799.2978723404253,
            "unit": "ns",
            "range": "± 1316.084538496119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12355.303370786516,
            "unit": "ns",
            "range": "± 1070.5875766106453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1158124.1397849463,
            "unit": "ns",
            "range": "± 88655.4945198341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2533761.06626506,
            "unit": "ns",
            "range": "± 210049.75627468238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714308.6923076923,
            "unit": "ns",
            "range": "± 128279.1322363239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7884083.2,
            "unit": "ns",
            "range": "± 872656.2247446103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3050303.7083333335,
            "unit": "ns",
            "range": "± 241959.4017485672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3135425.9789473685,
            "unit": "ns",
            "range": "± 240750.60708670408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3638770.435483871,
            "unit": "ns",
            "range": "± 162074.72766393912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3491253.05,
            "unit": "ns",
            "range": "± 158140.51530917254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13154800.967391305,
            "unit": "ns",
            "range": "± 2234826.616178365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4441204.067708333,
            "unit": "ns",
            "range": "± 145699.68218432993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410915.9325597426,
            "unit": "ns",
            "range": "± 28284.268968911678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 909419.1874348958,
            "unit": "ns",
            "range": "± 12433.85507695082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2016390.65234375,
            "unit": "ns",
            "range": "± 31249.728205947828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 658694.4111328125,
            "unit": "ns",
            "range": "± 9965.982661716555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573154.6858072917,
            "unit": "ns",
            "range": "± 9431.954328489523"
          }
        ]
      }
    ]
  }
}