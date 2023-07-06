window.BENCHMARK_DATA = {
  "lastUpdate": 1688658129939,
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
          "id": "1e826afd74a68a4c93f625498c1b0cfbf58b3636",
          "message": "Use mock state as intended",
          "timestamp": "2023-07-07T00:21:54+09:00",
          "tree_id": "6a013380116525dd68f340aaf5d5418577dd03f1",
          "url": "https://github.com/greymistcube/libplanet/commit/1e826afd74a68a4c93f625498c1b0cfbf58b3636"
        },
        "date": 1688658106318,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1561964.5833333333,
            "unit": "ns",
            "range": "± 167564.75824629815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2873215.789473684,
            "unit": "ns",
            "range": "± 187938.68302674557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1948913.5416666667,
            "unit": "ns",
            "range": "± 169078.9791284358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5638522.680412371,
            "unit": "ns",
            "range": "± 442272.0386220536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48995.522388059704,
            "unit": "ns",
            "range": "± 2345.6880386128037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8171543.478260869,
            "unit": "ns",
            "range": "± 206193.72582396865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21405335.29411765,
            "unit": "ns",
            "range": "± 688632.6988083652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53355778.571428575,
            "unit": "ns",
            "range": "± 851481.9978028999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106189453.33333333,
            "unit": "ns",
            "range": "± 1209904.2180901682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216370477.27272728,
            "unit": "ns",
            "range": "± 5250552.894780458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5885154.791666667,
            "unit": "ns",
            "range": "± 94882.11714261878"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1911141.71875,
            "unit": "ns",
            "range": "± 28042.587155096735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378996.0677083333,
            "unit": "ns",
            "range": "± 11856.49965866211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3108099.4791666665,
            "unit": "ns",
            "range": "± 28161.495533152563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 985818.4895833334,
            "unit": "ns",
            "range": "± 10181.775283187142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935826.5885416666,
            "unit": "ns",
            "range": "± 7620.844337908124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3415647.3684210526,
            "unit": "ns",
            "range": "± 74412.37478046132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3656256.25,
            "unit": "ns",
            "range": "± 253056.26701647954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4587316.666666667,
            "unit": "ns",
            "range": "± 116799.30265823199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4094289.5833333335,
            "unit": "ns",
            "range": "± 267989.1625770937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7199218.604651162,
            "unit": "ns",
            "range": "± 389387.6923374857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288267.032967033,
            "unit": "ns",
            "range": "± 16797.500177407714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273204.44444444444,
            "unit": "ns",
            "range": "± 15843.3476708121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241532.35294117648,
            "unit": "ns",
            "range": "± 4822.467656283469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4440221.428571428,
            "unit": "ns",
            "range": "± 124579.84902490764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4088166.304347826,
            "unit": "ns",
            "range": "± 228981.57624297973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17141.304347826088,
            "unit": "ns",
            "range": "± 1225.2070624653431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87512.34567901235,
            "unit": "ns",
            "range": "± 4587.602388940474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117137.36842105263,
            "unit": "ns",
            "range": "± 15134.519104782774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121249.48453608247,
            "unit": "ns",
            "range": "± 25176.130079366772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5818.041237113402,
            "unit": "ns",
            "range": "± 1363.8599017549857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17136.04651162791,
            "unit": "ns",
            "range": "± 943.2001584964287"
          }
        ]
      }
    ]
  }
}