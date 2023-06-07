window.BENCHMARK_DATA = {
  "lastUpdate": 1686129819216,
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
          "id": "2cb975586bfddbf420ba1e963e66498c7f97476f",
          "message": "Prepare 2.0.0",
          "timestamp": "2023-06-07T18:03:50+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/greymistcube/libplanet/commit/2cb975586bfddbf420ba1e963e66498c7f97476f"
        },
        "date": 1686129784507,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590017.4603174604,
            "unit": "ns",
            "range": "± 72754.58868065396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3113718,
            "unit": "ns",
            "range": "± 125314.29986645741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2657930.2083333335,
            "unit": "ns",
            "range": "± 181334.1853100551"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6289161.764705882,
            "unit": "ns",
            "range": "± 202385.4947711449"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56064.13043478261,
            "unit": "ns",
            "range": "± 3978.336432984093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8981726.666666666,
            "unit": "ns",
            "range": "± 165508.50416936574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24431635.714285713,
            "unit": "ns",
            "range": "± 343773.8223513622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64002312.24489796,
            "unit": "ns",
            "range": "± 2528055.143998433"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125862600,
            "unit": "ns",
            "range": "± 2655120.7368692183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249978097.36842105,
            "unit": "ns",
            "range": "± 5340323.747090871"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961710.770089285,
            "unit": "ns",
            "range": "± 64185.32912463266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927986.7838541667,
            "unit": "ns",
            "range": "± 29776.73400488344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1450776.0611979167,
            "unit": "ns",
            "range": "± 21087.78279382813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3259427.045036765,
            "unit": "ns",
            "range": "± 63012.71121060698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1024496.9866071428,
            "unit": "ns",
            "range": "± 13571.186687614003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 951511.3411458334,
            "unit": "ns",
            "range": "± 11484.105469671982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3924633.3333333335,
            "unit": "ns",
            "range": "± 80756.30734791301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4247489.47368421,
            "unit": "ns",
            "range": "± 144048.1015559652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5152273.9130434785,
            "unit": "ns",
            "range": "± 117940.22838012368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5170452.173913044,
            "unit": "ns",
            "range": "± 197811.61716152565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8200909.090909091,
            "unit": "ns",
            "range": "± 197813.25948405388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319347.36842105264,
            "unit": "ns",
            "range": "± 9985.97629765634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303904.7619047619,
            "unit": "ns",
            "range": "± 10874.58330866291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276016.8831168831,
            "unit": "ns",
            "range": "± 14140.53898508788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4967421.428571428,
            "unit": "ns",
            "range": "± 21732.895257276152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4637393.333333333,
            "unit": "ns",
            "range": "± 55051.0732562651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25968.947368421053,
            "unit": "ns",
            "range": "± 2298.301627189276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105961.29032258065,
            "unit": "ns",
            "range": "± 6845.039972857283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92408.51063829787,
            "unit": "ns",
            "range": "± 8586.131097317098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111914.21052631579,
            "unit": "ns",
            "range": "± 12547.754870718214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6846.3917525773195,
            "unit": "ns",
            "range": "± 1057.9128287645467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22748.936170212764,
            "unit": "ns",
            "range": "± 2053.5699144980217"
          }
        ]
      }
    ]
  }
}