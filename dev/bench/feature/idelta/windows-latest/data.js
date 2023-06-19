window.BENCHMARK_DATA = {
  "lastUpdate": 1687178308493,
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
          "id": "977f00de1f334f7bce2c45892aa4180ad9ac77cf",
          "message": "Moved some tesets; added Delta tests",
          "timestamp": "2023-06-17T22:16:16+09:00",
          "tree_id": "240faaab1c61b42b573cf8cdd8b55166ec87ad35",
          "url": "https://github.com/greymistcube/libplanet/commit/977f00de1f334f7bce2c45892aa4180ad9ac77cf"
        },
        "date": 1687008835606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1400381.8181818181,
            "unit": "ns",
            "range": "± 65601.98146419032"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2727215.254237288,
            "unit": "ns",
            "range": "± 119334.6393240733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1980953.6585365853,
            "unit": "ns",
            "range": "± 71256.55793525596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5214357.142857143,
            "unit": "ns",
            "range": "± 289327.2442304185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48708.333333333336,
            "unit": "ns",
            "range": "± 3047.023281367076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7516600,
            "unit": "ns",
            "range": "± 115316.25355227829"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20820513.333333332,
            "unit": "ns",
            "range": "± 312677.252282986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53104923.07692308,
            "unit": "ns",
            "range": "± 406426.52709078544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104882400,
            "unit": "ns",
            "range": "± 1483583.2584035804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205217786.66666666,
            "unit": "ns",
            "range": "± 2437688.737562303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4968126.197916667,
            "unit": "ns",
            "range": "± 30402.178856727052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1557401.6927083333,
            "unit": "ns",
            "range": "± 9638.140836714096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212120.4427083333,
            "unit": "ns",
            "range": "± 5053.336335897961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2741876.9080528845,
            "unit": "ns",
            "range": "± 6078.965100623787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854370.8775111607,
            "unit": "ns",
            "range": "± 3195.849401992159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779175.4673549107,
            "unit": "ns",
            "range": "± 1803.831721266455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3246694.230769231,
            "unit": "ns",
            "range": "± 133601.65023851878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528752.1739130435,
            "unit": "ns",
            "range": "± 132824.03855248232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4182542.8571428573,
            "unit": "ns",
            "range": "± 116115.71951058271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3882414.285714286,
            "unit": "ns",
            "range": "± 125350.83740037317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6375436.842105263,
            "unit": "ns",
            "range": "± 217906.60957820047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274884.0909090909,
            "unit": "ns",
            "range": "± 10333.552107302407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258000,
            "unit": "ns",
            "range": "± 9830.383738412476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240694.94949494948,
            "unit": "ns",
            "range": "± 14845.410022020715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4207337.5,
            "unit": "ns",
            "range": "± 80201.04633565158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3709400,
            "unit": "ns",
            "range": "± 74847.87906146707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22693.877551020407,
            "unit": "ns",
            "range": "± 2173.68594391872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92965.26315789473,
            "unit": "ns",
            "range": "± 6110.712052757299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77803.1914893617,
            "unit": "ns",
            "range": "± 6530.448981381098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94638.35616438356,
            "unit": "ns",
            "range": "± 4717.53908707196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6253.125,
            "unit": "ns",
            "range": "± 1243.082173258745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21190.816326530614,
            "unit": "ns",
            "range": "± 2409.5637084097475"
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
          "id": "d0440cd8f1cc7ac6546112aaa576ed9355c1bebe",
          "message": "Changelog",
          "timestamp": "2023-06-19T21:17:46+09:00",
          "tree_id": "703e3c94ebcc9beff387dbd0010d4547b22117d2",
          "url": "https://github.com/greymistcube/libplanet/commit/d0440cd8f1cc7ac6546112aaa576ed9355c1bebe"
        },
        "date": 1687178284429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1795791.0526315789,
            "unit": "ns",
            "range": "± 180662.56396984067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3390107.2916666665,
            "unit": "ns",
            "range": "± 285870.8597821536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2308721.052631579,
            "unit": "ns",
            "range": "± 194742.68669235508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6631168.421052632,
            "unit": "ns",
            "range": "± 528424.5738691161"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58811.82795698925,
            "unit": "ns",
            "range": "± 9912.24374044946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9644757.692307692,
            "unit": "ns",
            "range": "± 493919.12911821005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25448687.272727273,
            "unit": "ns",
            "range": "± 1073038.5953250886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67658727.77777778,
            "unit": "ns",
            "range": "± 2197907.1769833504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131179102.77777778,
            "unit": "ns",
            "range": "± 4280918.917474619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263701681.4814815,
            "unit": "ns",
            "range": "± 7366726.105476259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176235.546875,
            "unit": "ns",
            "range": "± 41762.85692141097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1959819.84375,
            "unit": "ns",
            "range": "± 24106.827222222717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1487502.4348958333,
            "unit": "ns",
            "range": "± 24702.576686418688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3236630.2734375,
            "unit": "ns",
            "range": "± 31315.04179011817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1068906.5625,
            "unit": "ns",
            "range": "± 13684.947634059728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1025378.3353365385,
            "unit": "ns",
            "range": "± 16066.277956737611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3832550,
            "unit": "ns",
            "range": "± 220852.37508106488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4042674.6666666665,
            "unit": "ns",
            "range": "± 201706.2783552558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5427368,
            "unit": "ns",
            "range": "± 272713.8962950594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4747396.842105263,
            "unit": "ns",
            "range": "± 381085.71506153856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8107540,
            "unit": "ns",
            "range": "± 245525.23795037493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349439.5833333333,
            "unit": "ns",
            "range": "± 34297.56007638127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328308.4210526316,
            "unit": "ns",
            "range": "± 35938.02189455019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291931.25,
            "unit": "ns",
            "range": "± 38205.10936483427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4986443.209876543,
            "unit": "ns",
            "range": "± 259629.40845475867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4550590.322580645,
            "unit": "ns",
            "range": "± 257663.35429094304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23848.88888888889,
            "unit": "ns",
            "range": "± 5444.722100489662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114667.01030927835,
            "unit": "ns",
            "range": "± 18735.23708622274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115932.25806451614,
            "unit": "ns",
            "range": "± 27614.343946305384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136765.95744680852,
            "unit": "ns",
            "range": "± 24473.138898965582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7883.516483516483,
            "unit": "ns",
            "range": "± 1831.2268951148412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27374.747474747473,
            "unit": "ns",
            "range": "± 8917.322553166558"
          }
        ]
      }
    ]
  }
}