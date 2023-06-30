window.BENCHMARK_DATA = {
  "lastUpdate": 1688103886251,
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
          "id": "562375f5749f1239d08719639d67a1a5f05299b5",
          "message": "Reroute delta access",
          "timestamp": "2023-06-30T14:30:25+09:00",
          "tree_id": "389a47a66d56321adead8d670cdb6acdeb0ffd82",
          "url": "https://github.com/greymistcube/libplanet/commit/562375f5749f1239d08719639d67a1a5f05299b5"
        },
        "date": 1688103869535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7722121,
            "unit": "ns",
            "range": "± 53041.39691316585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18899918.583333332,
            "unit": "ns",
            "range": "± 171583.39767082696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47476038.5,
            "unit": "ns",
            "range": "± 1219782.7247354877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92094157.41666667,
            "unit": "ns",
            "range": "± 715756.2258702912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197783238.66666666,
            "unit": "ns",
            "range": "± 7776311.202524972"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53556.420454545456,
            "unit": "ns",
            "range": "± 5086.497798649751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303840.6818181818,
            "unit": "ns",
            "range": "± 14181.157562776027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289897.4090909091,
            "unit": "ns",
            "range": "± 25828.41219332738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293172.1914893617,
            "unit": "ns",
            "range": "± 24612.148801112406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4200285.411764706,
            "unit": "ns",
            "range": "± 80794.19810934665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3721235.5384615385,
            "unit": "ns",
            "range": "± 47404.130879448654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17889.896907216495,
            "unit": "ns",
            "range": "± 3223.433510005726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82115.36170212766,
            "unit": "ns",
            "range": "± 7891.641639116535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75082.92307692308,
            "unit": "ns",
            "range": "± 5809.699323317036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97301.17525773196,
            "unit": "ns",
            "range": "± 14118.45785518192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4493.544303797468,
            "unit": "ns",
            "range": "± 624.1546651984042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15419.024096385541,
            "unit": "ns",
            "range": "± 1470.752917982401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1652136.3865979381,
            "unit": "ns",
            "range": "± 171877.50988130303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2871858.3766233767,
            "unit": "ns",
            "range": "± 145248.07735026442"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2142833.232323232,
            "unit": "ns",
            "range": "± 178841.48339018156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6093784.978723404,
            "unit": "ns",
            "range": "± 363300.3669651468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3094069.6666666665,
            "unit": "ns",
            "range": "± 44315.3689723048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3245380.565217391,
            "unit": "ns",
            "range": "± 78738.35408653725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4185254.519230769,
            "unit": "ns",
            "range": "± 170991.8060183908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3639106.976190476,
            "unit": "ns",
            "range": "± 154779.98083240373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7178523.086021505,
            "unit": "ns",
            "range": "± 447075.7700725824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194376.036621094,
            "unit": "ns",
            "range": "± 119058.28996135604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972295.0192708333,
            "unit": "ns",
            "range": "± 21158.962603247426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1225852.7453962055,
            "unit": "ns",
            "range": "± 14409.108936112496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2463882.2319010417,
            "unit": "ns",
            "range": "± 28637.044058965785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757745.9402204241,
            "unit": "ns",
            "range": "± 6507.959935619736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 700020.7009626116,
            "unit": "ns",
            "range": "± 5695.410574587345"
          }
        ]
      }
    ]
  }
}