window.BENCHMARK_DATA = {
  "lastUpdate": 1708396142655,
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
          "id": "c1414e8ce929a1e5b5195134d44aef321b719aba",
          "message": "Optimized action evaluator",
          "timestamp": "2024-02-20T11:07:47+09:00",
          "tree_id": "4652084f03c64430ed32917042b6ade68d9df046",
          "url": "https://github.com/greymistcube/libplanet/commit/c1414e8ce929a1e5b5195134d44aef321b719aba"
        },
        "date": 1708395742750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7666191.611111111,
            "unit": "ns",
            "range": "± 163529.88979681212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19133567.815789472,
            "unit": "ns",
            "range": "± 405353.5943225717"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46698296.928571425,
            "unit": "ns",
            "range": "± 282219.8443405599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97802165.38571429,
            "unit": "ns",
            "range": "± 3210684.6053387653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195223813.3181818,
            "unit": "ns",
            "range": "± 3905636.0539479186"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36775.16470588235,
            "unit": "ns",
            "range": "± 6327.2432025312255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278443.29292929295,
            "unit": "ns",
            "range": "± 44172.17269638703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 272006.6170212766,
            "unit": "ns",
            "range": "± 35194.90199920254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258238.5909090909,
            "unit": "ns",
            "range": "± 42380.12800880469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4241555.663157894,
            "unit": "ns",
            "range": "± 249099.90829117654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3723950.2462686566,
            "unit": "ns",
            "range": "± 176887.1097398036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15017.219512195123,
            "unit": "ns",
            "range": "± 3388.3197555771385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82392.3469387755,
            "unit": "ns",
            "range": "± 27306.931975969914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98488.12631578947,
            "unit": "ns",
            "range": "± 23469.88453871195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87812.20833333333,
            "unit": "ns",
            "range": "± 18251.567762461378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5556.284946236559,
            "unit": "ns",
            "range": "± 1595.6889874137535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21952.35,
            "unit": "ns",
            "range": "± 11743.450619473824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1135034.5326086956,
            "unit": "ns",
            "range": "± 159836.06472762744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2253358.449438202,
            "unit": "ns",
            "range": "± 124463.48560585688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1816427.8666666667,
            "unit": "ns",
            "range": "± 157990.23735359038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12205462.5,
            "unit": "ns",
            "range": "± 4796736.253064953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2975630.701298701,
            "unit": "ns",
            "range": "± 152048.16743042014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3576254.452631579,
            "unit": "ns",
            "range": "± 553047.4891298247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3676999.563829787,
            "unit": "ns",
            "range": "± 212900.89098733285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3873301.7789473683,
            "unit": "ns",
            "range": "± 236262.5167167747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18297491.597826086,
            "unit": "ns",
            "range": "± 2770564.137990812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4819866.345859375,
            "unit": "ns",
            "range": "± 313390.75921879004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1329798.951171875,
            "unit": "ns",
            "range": "± 12173.97556347153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 883649.6175362723,
            "unit": "ns",
            "range": "± 7696.1989474479005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2057614.56015625,
            "unit": "ns",
            "range": "± 27167.704769671436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628947.7707682292,
            "unit": "ns",
            "range": "± 7238.272811832456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577165.1629231771,
            "unit": "ns",
            "range": "± 7078.252305146415"
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
          "id": "dc089524488fc43eba798e13fb800087182dd0d0",
          "message": "Changelog",
          "timestamp": "2024-02-20T11:11:09+09:00",
          "tree_id": "192497160d353fc82748f877c127cb77f44b8b25",
          "url": "https://github.com/greymistcube/libplanet/commit/dc089524488fc43eba798e13fb800087182dd0d0"
        },
        "date": 1708396127759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7711077.375,
            "unit": "ns",
            "range": "± 151383.38265030942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18843295.11764706,
            "unit": "ns",
            "range": "± 374456.94164898363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46543674.28571428,
            "unit": "ns",
            "range": "± 419067.89197390265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96349165.08108108,
            "unit": "ns",
            "range": "± 3221707.2916513574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196653608.9347826,
            "unit": "ns",
            "range": "± 4901249.852588353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43521.96808510638,
            "unit": "ns",
            "range": "± 12064.745493442915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227146.32631578948,
            "unit": "ns",
            "range": "± 21004.73390181371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224397.78865979382,
            "unit": "ns",
            "range": "± 21373.30639925982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200953.55208333334,
            "unit": "ns",
            "range": "± 19079.732049519705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3995559.5,
            "unit": "ns",
            "range": "± 66949.41980430699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3453812.3076923075,
            "unit": "ns",
            "range": "± 54946.8912744913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13753.521978021978,
            "unit": "ns",
            "range": "± 1913.6879577171405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63406.790322580644,
            "unit": "ns",
            "range": "± 8589.415393100478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61887.76,
            "unit": "ns",
            "range": "± 12543.16126007968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75605.62765957447,
            "unit": "ns",
            "range": "± 13233.587173888422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5588.572164948454,
            "unit": "ns",
            "range": "± 1393.9847055550165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18424.427835051545,
            "unit": "ns",
            "range": "± 3442.5170274555367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375866.0494505495,
            "unit": "ns",
            "range": "± 113378.28968764149"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927859.098765432,
            "unit": "ns",
            "range": "± 153226.953850294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2181871.2157894736,
            "unit": "ns",
            "range": "± 177433.31619534685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14587713.458333334,
            "unit": "ns",
            "range": "± 4936176.586149784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2909694.649122807,
            "unit": "ns",
            "range": "± 121116.00890888678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3109499.3,
            "unit": "ns",
            "range": "± 244525.809350083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3607712.8863636362,
            "unit": "ns",
            "range": "± 134829.265245056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3692870.2,
            "unit": "ns",
            "range": "± 155977.2401948201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16876166.86956522,
            "unit": "ns",
            "range": "± 2335898.690826442"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5248828.472079918,
            "unit": "ns",
            "range": "± 236940.58786407523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1551933.9112807766,
            "unit": "ns",
            "range": "± 140078.91031963946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 915067.8504464285,
            "unit": "ns",
            "range": "± 21417.74268163847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2322724.6066796873,
            "unit": "ns",
            "range": "± 304069.55118376634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635348.5931532118,
            "unit": "ns",
            "range": "± 13283.370182218334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579887.5847284226,
            "unit": "ns",
            "range": "± 13656.628628467899"
          }
        ]
      }
    ]
  }
}