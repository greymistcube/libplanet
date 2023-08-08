window.BENCHMARK_DATA = {
  "lastUpdate": 1691482803723,
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
          "id": "b1f623b36c98e27c21c226c5817feae3e4ac02d5",
          "message": "Added single get to ITrie; automatic parallel switch",
          "timestamp": "2023-08-08T16:57:00+09:00",
          "tree_id": "d610e24cc0d89f3256b8bdabcfe58ee6378c5b2a",
          "url": "https://github.com/greymistcube/libplanet/commit/b1f623b36c98e27c21c226c5817feae3e4ac02d5"
        },
        "date": 1691482456143,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8191843.0612244895,
            "unit": "ns",
            "range": "± 323136.21346928447"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23337048.57142857,
            "unit": "ns",
            "range": "± 159385.92574892132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52781520.28571428,
            "unit": "ns",
            "range": "± 621530.1890760823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103905520.57142857,
            "unit": "ns",
            "range": "± 961087.4194968079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215877418.83333334,
            "unit": "ns",
            "range": "± 1707940.9372248547"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67744.69892473119,
            "unit": "ns",
            "range": "± 9820.155410070332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340449.84831460676,
            "unit": "ns",
            "range": "± 23493.56036966741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319877.0215053763,
            "unit": "ns",
            "range": "± 22784.672958973068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311119.3988764045,
            "unit": "ns",
            "range": "± 17188.632514784127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197135.428571428,
            "unit": "ns",
            "range": "± 59493.22443866941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3713268.0714285714,
            "unit": "ns",
            "range": "± 39020.774666962854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21347.9587628866,
            "unit": "ns",
            "range": "± 3418.9462281208503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108458.36597938144,
            "unit": "ns",
            "range": "± 11093.559882529504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110365,
            "unit": "ns",
            "range": "± 9738.295887885108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117219.21276595745,
            "unit": "ns",
            "range": "± 12675.228320882507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6759.010204081633,
            "unit": "ns",
            "range": "± 1078.9431302183257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21448.151515151516,
            "unit": "ns",
            "range": "± 5171.617710360563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599014.7731958763,
            "unit": "ns",
            "range": "± 160309.91072226744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2990872.714285714,
            "unit": "ns",
            "range": "± 204301.0816156328"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2012340.8409090908,
            "unit": "ns",
            "range": "± 117611.49068831849"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5951214.96875,
            "unit": "ns",
            "range": "± 460751.53038491466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3335195.684782609,
            "unit": "ns",
            "range": "± 194311.27378031958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3536191.294117647,
            "unit": "ns",
            "range": "± 168033.18523732672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4447292.388888889,
            "unit": "ns",
            "range": "± 81254.97455814287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4012346.195652174,
            "unit": "ns",
            "range": "± 224519.55145064465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7273812.439024391,
            "unit": "ns",
            "range": "± 220290.34570335224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6599713.295758928,
            "unit": "ns",
            "range": "± 95445.64377056727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032722.6385416666,
            "unit": "ns",
            "range": "± 17042.611801249128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313644.9909319195,
            "unit": "ns",
            "range": "± 5658.8884070923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2876007.335720486,
            "unit": "ns",
            "range": "± 80250.02924014794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861967.0315987723,
            "unit": "ns",
            "range": "± 2870.383321480119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775191.0581752232,
            "unit": "ns",
            "range": "± 17807.534924032017"
          }
        ]
      },
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
          "id": "6eee647dbd01c344f9be474baf83bdb2b3df65bb",
          "message": "Changelog",
          "timestamp": "2023-08-08T17:00:50+09:00",
          "tree_id": "bbca0c04749f4b60ee9725e7c713ec8060c5de1f",
          "url": "https://github.com/greymistcube/libplanet/commit/6eee647dbd01c344f9be474baf83bdb2b3df65bb"
        },
        "date": 1691482790221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9196920.319148935,
            "unit": "ns",
            "range": "± 544255.3264381132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22558425.93,
            "unit": "ns",
            "range": "± 1337768.990501106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56061280.52380952,
            "unit": "ns",
            "range": "± 2037837.9469817406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110672799.875,
            "unit": "ns",
            "range": "± 2173083.8087605326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225408097.2777778,
            "unit": "ns",
            "range": "± 4331421.455730341"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76511.30898876404,
            "unit": "ns",
            "range": "± 8703.001571919162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384454.3387096774,
            "unit": "ns",
            "range": "± 59800.426858715415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359965.40206185565,
            "unit": "ns",
            "range": "± 43936.23259069609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341144.7395833333,
            "unit": "ns",
            "range": "± 43230.22848698272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4733860.465116279,
            "unit": "ns",
            "range": "± 377376.3768291762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700535.4166666665,
            "unit": "ns",
            "range": "± 95319.00742377475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17034.717391304348,
            "unit": "ns",
            "range": "± 1740.0026293152232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83550.44791666667,
            "unit": "ns",
            "range": "± 7025.052814740282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94133.625,
            "unit": "ns",
            "range": "± 13520.468966679646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107434.53684210527,
            "unit": "ns",
            "range": "± 18788.299831255626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5514.265957446809,
            "unit": "ns",
            "range": "± 798.4579651142881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20512.827956989247,
            "unit": "ns",
            "range": "± 2886.8176085201653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487333.8854166667,
            "unit": "ns",
            "range": "± 103133.62655576806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2949849.826530612,
            "unit": "ns",
            "range": "± 116533.6308634743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244382.611111111,
            "unit": "ns",
            "range": "± 257459.95346155544"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6159676.64893617,
            "unit": "ns",
            "range": "± 511069.5574836266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585556.5412371135,
            "unit": "ns",
            "range": "± 307085.3858166228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3828309.112244898,
            "unit": "ns",
            "range": "± 353163.2029488204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4806423.898989899,
            "unit": "ns",
            "range": "± 320310.2881470829"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4236484.974226804,
            "unit": "ns",
            "range": "± 361798.61300487584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7411904.3625,
            "unit": "ns",
            "range": "± 387242.12762362836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7116994.078330592,
            "unit": "ns",
            "range": "± 154721.64099329984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2106234.0415039062,
            "unit": "ns",
            "range": "± 39527.78657839872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1465191.0105329242,
            "unit": "ns",
            "range": "± 63076.81841878167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2865168.7277856693,
            "unit": "ns",
            "range": "± 203375.46749547432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850497.2375837053,
            "unit": "ns",
            "range": "± 12908.31563344765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806876.3352539062,
            "unit": "ns",
            "range": "± 16051.146040643036"
          }
        ]
      }
    ]
  }
}