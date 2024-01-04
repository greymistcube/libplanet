window.BENCHMARK_DATA = {
  "lastUpdate": 1704335198048,
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
          "id": "7903c084230fb6dd3481171093c87681c08bde65",
          "message": "Prepare 3.9.4",
          "timestamp": "2024-01-04T11:05:56+09:00",
          "tree_id": "a44ae183ac56aae248479c66c087363ee5222613",
          "url": "https://github.com/greymistcube/libplanet/commit/7903c084230fb6dd3481171093c87681c08bde65"
        },
        "date": 1704335183062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7870249.571428572,
            "unit": "ns",
            "range": "± 97162.60723511527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19644187.625,
            "unit": "ns",
            "range": "± 375293.9544195323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51382473.38235294,
            "unit": "ns",
            "range": "± 1019867.6437332373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98132577.76666667,
            "unit": "ns",
            "range": "± 919586.5613944178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209200684.64285713,
            "unit": "ns",
            "range": "± 3015696.4239838873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66092.93478260869,
            "unit": "ns",
            "range": "± 7534.568777709154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325820.2840909091,
            "unit": "ns",
            "range": "± 25476.768087695636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354515.4747474748,
            "unit": "ns",
            "range": "± 55498.26509980867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311501.4935064935,
            "unit": "ns",
            "range": "± 15798.857050285376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4400467,
            "unit": "ns",
            "range": "± 380789.5140917183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4080452.0789473685,
            "unit": "ns",
            "range": "± 378482.72426331206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24195.242105263158,
            "unit": "ns",
            "range": "± 5012.850723583508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104038.60215053764,
            "unit": "ns",
            "range": "± 15860.799415910109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90940.13541666667,
            "unit": "ns",
            "range": "± 19440.01293730336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94970.09375,
            "unit": "ns",
            "range": "± 12670.149098178197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7514.673913043478,
            "unit": "ns",
            "range": "± 1193.3417950241885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21166.308510638297,
            "unit": "ns",
            "range": "± 4371.40468806178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382208.5918367347,
            "unit": "ns",
            "range": "± 160648.25960605795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773389.2608695654,
            "unit": "ns",
            "range": "± 158366.92703879625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2275649.8163265307,
            "unit": "ns",
            "range": "± 256978.43476919355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8818347.125,
            "unit": "ns",
            "range": "± 166077.90533034992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3094478.794117647,
            "unit": "ns",
            "range": "± 92535.76391165689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245281.519230769,
            "unit": "ns",
            "range": "± 132475.23745694564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4178002.552631579,
            "unit": "ns",
            "range": "± 76799.85613085025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4248172.436842105,
            "unit": "ns",
            "range": "± 291409.4999158916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17805941.85714286,
            "unit": "ns",
            "range": "± 2872121.3829596774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6051901.2171027865,
            "unit": "ns",
            "range": "± 313313.20997755096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000494.7494921875,
            "unit": "ns",
            "range": "± 121843.55984247908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068744.770733173,
            "unit": "ns",
            "range": "± 11779.162574202323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2942089.8497100514,
            "unit": "ns",
            "range": "± 194377.27962618333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799244.3181870404,
            "unit": "ns",
            "range": "± 15894.942184040689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744198.0296875,
            "unit": "ns",
            "range": "± 24012.94822788642"
          }
        ]
      }
    ]
  }
}