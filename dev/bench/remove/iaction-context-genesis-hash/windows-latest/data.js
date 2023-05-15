window.BENCHMARK_DATA = {
  "lastUpdate": 1684156097046,
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
          "id": "01bd4c5391da7022b66b58765776ae29d625d812",
          "message": "Removed IActionContext.GenesisHash",
          "timestamp": "2023-05-15T21:44:10+09:00",
          "tree_id": "8a6032b5d34baaf40369f884b9f534f1e8f0171a",
          "url": "https://github.com/greymistcube/libplanet/commit/01bd4c5391da7022b66b58765776ae29d625d812"
        },
        "date": 1684156025477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1356197.9797979798,
            "unit": "ns",
            "range": "± 108647.28269355597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497596.8085106383,
            "unit": "ns",
            "range": "± 96393.04469555843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2352985,
            "unit": "ns",
            "range": "± 52280.79324288474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5073556.25,
            "unit": "ns",
            "range": "± 185519.3032409296"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42746.153846153844,
            "unit": "ns",
            "range": "± 2006.9470691728616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6909140,
            "unit": "ns",
            "range": "± 47149.86441428771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17722450,
            "unit": "ns",
            "range": "± 78638.78541425071"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45224800,
            "unit": "ns",
            "range": "± 200796.10838573825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91086920,
            "unit": "ns",
            "range": "± 285284.8756694162"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182644386.66666666,
            "unit": "ns",
            "range": "± 669313.7262115862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773325.901442308,
            "unit": "ns",
            "range": "± 9507.484041110305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500264.0625,
            "unit": "ns",
            "range": "± 1772.1684677712105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140557.6450892857,
            "unit": "ns",
            "range": "± 1623.6519070986633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581663.9229910714,
            "unit": "ns",
            "range": "± 9034.258425048189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816211.6071428572,
            "unit": "ns",
            "range": "± 2498.31790810745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741757.1516927084,
            "unit": "ns",
            "range": "± 1257.5737185630053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2983639.189189189,
            "unit": "ns",
            "range": "± 39886.78968018097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3237350,
            "unit": "ns",
            "range": "± 86132.52231300324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4112586.6666666665,
            "unit": "ns",
            "range": "± 74299.24885860141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3992252.272727273,
            "unit": "ns",
            "range": "± 148799.58034548906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6331269.565217392,
            "unit": "ns",
            "range": "± 117789.65626288942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257662.5,
            "unit": "ns",
            "range": "± 10020.770474823326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246126.19047619047,
            "unit": "ns",
            "range": "± 8912.393659579997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229892.70833333334,
            "unit": "ns",
            "range": "± 13186.566088989895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3857200,
            "unit": "ns",
            "range": "± 26943.787638483427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3540392.3076923075,
            "unit": "ns",
            "range": "± 16704.912527879413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19006.842105263157,
            "unit": "ns",
            "range": "± 1623.8025133813549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87355.43478260869,
            "unit": "ns",
            "range": "± 6439.155021530723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66663.63636363637,
            "unit": "ns",
            "range": "± 3097.3257131639507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88598.97959183673,
            "unit": "ns",
            "range": "± 14081.877619783107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4720.833333333333,
            "unit": "ns",
            "range": "± 711.8421863345934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17683.333333333332,
            "unit": "ns",
            "range": "± 1347.8447214936991"
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
          "id": "47384ac69f530d740859ccfb4d3bfbe884659489",
          "message": "Changelog",
          "timestamp": "2023-05-15T21:54:43+09:00",
          "tree_id": "5a37f7a7746f259af0f2f02ae578abf5c46319a2",
          "url": "https://github.com/greymistcube/libplanet/commit/47384ac69f530d740859ccfb4d3bfbe884659489"
        },
        "date": 1684156073026,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1322661,
            "unit": "ns",
            "range": "± 119944.68328981884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2400510.465116279,
            "unit": "ns",
            "range": "± 88923.69157647494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2069465,
            "unit": "ns",
            "range": "± 139963.9241939064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4889758.108108108,
            "unit": "ns",
            "range": "± 163902.10556978884"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43093.506493506495,
            "unit": "ns",
            "range": "± 2137.653513252425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6651757.142857143,
            "unit": "ns",
            "range": "± 20503.722524523135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17363735.714285713,
            "unit": "ns",
            "range": "± 73354.29940881612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44402286.666666664,
            "unit": "ns",
            "range": "± 353885.0738923719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88701073.33333333,
            "unit": "ns",
            "range": "± 682239.5771770111"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179380828.57142857,
            "unit": "ns",
            "range": "± 1349571.0772621122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4751971.986607143,
            "unit": "ns",
            "range": "± 8950.990308723842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519938.0208333333,
            "unit": "ns",
            "range": "± 3310.7068764888845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1215057.7604166667,
            "unit": "ns",
            "range": "± 1304.7191177422449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2580570.234375,
            "unit": "ns",
            "range": "± 6556.445725511912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809073.5481770834,
            "unit": "ns",
            "range": "± 5237.065260183971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 720373.0533854166,
            "unit": "ns",
            "range": "± 964.716672343122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2943221.052631579,
            "unit": "ns",
            "range": "± 63818.45413138192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3155076.923076923,
            "unit": "ns",
            "range": "± 86294.91900543071"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4021896.153846154,
            "unit": "ns",
            "range": "± 109247.91798755426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3810823.4567901236,
            "unit": "ns",
            "range": "± 185689.76901784661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6380238.70967742,
            "unit": "ns",
            "range": "± 188918.39804074026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253063.15789473685,
            "unit": "ns",
            "range": "± 8378.13825196207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237284.04255319148,
            "unit": "ns",
            "range": "± 13535.356354898227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209578.125,
            "unit": "ns",
            "range": "± 9617.897812585312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3886650,
            "unit": "ns",
            "range": "± 33124.39839802029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3419486.6666666665,
            "unit": "ns",
            "range": "± 36742.790676085926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16228.888888888889,
            "unit": "ns",
            "range": "± 1736.407530250635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76986.48648648648,
            "unit": "ns",
            "range": "± 3323.322496782866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65630.50847457627,
            "unit": "ns",
            "range": "± 2825.3931210930714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82552.57731958762,
            "unit": "ns",
            "range": "± 10930.901274059253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4122.680412371134,
            "unit": "ns",
            "range": "± 700.5214062038561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16078.125,
            "unit": "ns",
            "range": "± 1826.8870921237638"
          }
        ]
      }
    ]
  }
}