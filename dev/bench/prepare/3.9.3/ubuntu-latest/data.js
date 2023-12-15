window.BENCHMARK_DATA = {
  "lastUpdate": 1702618117323,
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
          "id": "9860c2020284ee06366fe4a6297f552a05539fe0",
          "message": "Prepare 3.9.3",
          "timestamp": "2023-12-15T14:17:36+09:00",
          "tree_id": "10171e9d05502bea7fd706aa57892745ff0e2867",
          "url": "https://github.com/greymistcube/libplanet/commit/9860c2020284ee06366fe4a6297f552a05539fe0"
        },
        "date": 1702618111300,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3790158.0733816964,
            "unit": "ns",
            "range": "± 52046.932800049304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1249250.858570772,
            "unit": "ns",
            "range": "± 24749.42073662705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763186.0064871652,
            "unit": "ns",
            "range": "± 2438.994197161104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928132.4052734375,
            "unit": "ns",
            "range": "± 4745.396703532765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610562.0861467634,
            "unit": "ns",
            "range": "± 1315.7483106306995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576222.7408621652,
            "unit": "ns",
            "range": "± 776.642192673237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2441478.289473684,
            "unit": "ns",
            "range": "± 82244.15023776985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2554818.8,
            "unit": "ns",
            "range": "± 67498.58145052631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3114503.294117647,
            "unit": "ns",
            "range": "± 63679.511729406244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2938920.8333333335,
            "unit": "ns",
            "range": "± 46702.344897792675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6708690.928571428,
            "unit": "ns",
            "range": "± 112779.36481498479"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41973.583333333336,
            "unit": "ns",
            "range": "± 5302.9000460357165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200284.5243902439,
            "unit": "ns",
            "range": "± 7032.397761389087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200107.96315789473,
            "unit": "ns",
            "range": "± 18896.797969672185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171270.7857142857,
            "unit": "ns",
            "range": "± 2864.956522117984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3125116.033333333,
            "unit": "ns",
            "range": "± 38128.22476641281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2764815.8235294116,
            "unit": "ns",
            "range": "± 39864.41097996321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12005.945652173914,
            "unit": "ns",
            "range": "± 898.8295119316846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64054.326315789476,
            "unit": "ns",
            "range": "± 5444.619929767298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60949.10588235294,
            "unit": "ns",
            "range": "± 3680.495738553789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60479.15217391304,
            "unit": "ns",
            "range": "± 12153.62886108804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3400.3010752688174,
            "unit": "ns",
            "range": "± 414.52426333103296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11558.195652173914,
            "unit": "ns",
            "range": "± 1042.4024790514156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5670314.533333333,
            "unit": "ns",
            "range": "± 48179.877991404945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14624447.4,
            "unit": "ns",
            "range": "± 160414.26577850594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36365090.53333333,
            "unit": "ns",
            "range": "± 228955.22090102706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73920810.96153846,
            "unit": "ns",
            "range": "± 300236.5943281552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151038068.3846154,
            "unit": "ns",
            "range": "± 1028396.8074031977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 955761.724489796,
            "unit": "ns",
            "range": "± 67126.86313128294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1987553.4411764706,
            "unit": "ns",
            "range": "± 63875.04709881021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439567.663265306,
            "unit": "ns",
            "range": "± 107408.19936678642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5734999.78125,
            "unit": "ns",
            "range": "± 175346.21730583961"
          }
        ]
      }
    ]
  }
}