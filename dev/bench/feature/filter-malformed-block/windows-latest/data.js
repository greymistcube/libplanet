window.BENCHMARK_DATA = {
  "lastUpdate": 1683608840606,
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
          "id": "b91b19a69521ad081afb31944c288d98ebbce4f8",
          "message": "Added test",
          "timestamp": "2023-05-08T17:26:06+09:00",
          "tree_id": "3084fc63159fadeeff50ba744a90f6f4c5c3efde",
          "url": "https://github.com/greymistcube/libplanet/commit/b91b19a69521ad081afb31944c288d98ebbce4f8"
        },
        "date": 1683536625611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412234,
            "unit": "ns",
            "range": "± 127503.35723050787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2598588.5416666665,
            "unit": "ns",
            "range": "± 149398.96065994547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212334.536082474,
            "unit": "ns",
            "range": "± 147866.89632642467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5422973.456790123,
            "unit": "ns",
            "range": "± 284646.48657220637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52371.27659574468,
            "unit": "ns",
            "range": "± 4209.196851862112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7428830.645161291,
            "unit": "ns",
            "range": "± 219701.93356660113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20147853.333333332,
            "unit": "ns",
            "range": "± 197207.5949952474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50618457.14285714,
            "unit": "ns",
            "range": "± 400662.09187809605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101370885.71428572,
            "unit": "ns",
            "range": "± 829238.3250792379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201816273.33333334,
            "unit": "ns",
            "range": "± 1762866.4253209345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828618.697916667,
            "unit": "ns",
            "range": "± 12263.636808076822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1522036.1328125,
            "unit": "ns",
            "range": "± 4052.59358609139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1181279.0559895833,
            "unit": "ns",
            "range": "± 4615.322774559655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2628897.9427083335,
            "unit": "ns",
            "range": "± 7048.136707362985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823706.1848958334,
            "unit": "ns",
            "range": "± 2826.380824478527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759419.23828125,
            "unit": "ns",
            "range": "± 2674.5230719418287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231183.3333333335,
            "unit": "ns",
            "range": "± 94337.17986958867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3485838.4615384615,
            "unit": "ns",
            "range": "± 53331.550050314785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3987346.511627907,
            "unit": "ns",
            "range": "± 145884.49173238984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4268973.80952381,
            "unit": "ns",
            "range": "± 150245.24027122444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6651358.333333333,
            "unit": "ns",
            "range": "± 170615.55287856373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273744.18604651163,
            "unit": "ns",
            "range": "± 14782.3850232885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268060.71428571426,
            "unit": "ns",
            "range": "± 7656.192811037896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222037.2093023256,
            "unit": "ns",
            "range": "± 8106.494258891153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4015315.3846153845,
            "unit": "ns",
            "range": "± 46721.26293516059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654653.3333333335,
            "unit": "ns",
            "range": "± 62321.927655253625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23470.526315789473,
            "unit": "ns",
            "range": "± 2028.041382147901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98195.95959595959,
            "unit": "ns",
            "range": "± 8641.864396254367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94101.51515151515,
            "unit": "ns",
            "range": "± 10754.964336759664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107275.82417582418,
            "unit": "ns",
            "range": "± 12354.264586767336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6744.210526315789,
            "unit": "ns",
            "range": "± 1236.8212335328842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22967.34693877551,
            "unit": "ns",
            "range": "± 3217.9193992137048"
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
          "id": "adcfdffcc09b7116c29c07ea9fd0473ecd47c4ec",
          "message": "Changelog",
          "timestamp": "2023-05-08T18:06:30+09:00",
          "tree_id": "91749c8cdb65247dad97992d65ca7198e5e84269",
          "url": "https://github.com/greymistcube/libplanet/commit/adcfdffcc09b7116c29c07ea9fd0473ecd47c4ec"
        },
        "date": 1683537747557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1377009.1836734693,
            "unit": "ns",
            "range": "± 130536.90878048982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2431015.68627451,
            "unit": "ns",
            "range": "± 97737.02343032352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2093911.224489796,
            "unit": "ns",
            "range": "± 133753.5292010753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5332963.636363637,
            "unit": "ns",
            "range": "± 348820.0859148772"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48612.37113402062,
            "unit": "ns",
            "range": "± 3171.233255505615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7243832.142857143,
            "unit": "ns",
            "range": "± 202930.6450646358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19285107.692307692,
            "unit": "ns",
            "range": "± 218866.23944599307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49078676.47058824,
            "unit": "ns",
            "range": "± 803882.5586873774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96959760,
            "unit": "ns",
            "range": "± 1170883.362374628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194974913.33333334,
            "unit": "ns",
            "range": "± 3341553.1813956276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4711227.34375,
            "unit": "ns",
            "range": "± 20685.021644021646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508055.078125,
            "unit": "ns",
            "range": "± 5386.430626006913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169651.5885416667,
            "unit": "ns",
            "range": "± 4640.955074176031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2601856.9010416665,
            "unit": "ns",
            "range": "± 4787.185888954981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823194.7005208334,
            "unit": "ns",
            "range": "± 3029.2478579180033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771133.4751674107,
            "unit": "ns",
            "range": "± 2178.2916073377774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3018950.769230769,
            "unit": "ns",
            "range": "± 134966.39410779832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3345939.534883721,
            "unit": "ns",
            "range": "± 115875.00889101498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3881650,
            "unit": "ns",
            "range": "± 48449.77970895382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4063175.925925926,
            "unit": "ns",
            "range": "± 169268.25526274124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6436188.888888889,
            "unit": "ns",
            "range": "± 168461.7060647802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 263123.8095238095,
            "unit": "ns",
            "range": "± 8566.63435416476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256690.4109589041,
            "unit": "ns",
            "range": "± 12665.549998843777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213422.72727272726,
            "unit": "ns",
            "range": "± 5085.17282734645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3976960,
            "unit": "ns",
            "range": "± 59748.733399605575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3553680,
            "unit": "ns",
            "range": "± 48823.38725300758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18390,
            "unit": "ns",
            "range": "± 1796.5040958183577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88110.20408163265,
            "unit": "ns",
            "range": "± 6652.222166444515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77008.24742268042,
            "unit": "ns",
            "range": "± 5676.664038395348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97554.63917525773,
            "unit": "ns",
            "range": "± 13396.237194160132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5837.634408602151,
            "unit": "ns",
            "range": "± 953.1314497708644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18503.092783505155,
            "unit": "ns",
            "range": "± 1754.9010898200354"
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
          "id": "3409656fff1d7e69f5c398619f989df77dc0aa6f",
          "message": "Changelog",
          "timestamp": "2023-05-09T13:53:18+09:00",
          "tree_id": "593b943c1f7328ababea9de3d3f08cfed1792324",
          "url": "https://github.com/greymistcube/libplanet/commit/3409656fff1d7e69f5c398619f989df77dc0aa6f"
        },
        "date": 1683608814916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1327996.7741935484,
            "unit": "ns",
            "range": "± 86312.36680449742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2424618.1818181816,
            "unit": "ns",
            "range": "± 76877.36766494357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2064464.2105263157,
            "unit": "ns",
            "range": "± 116268.57473730626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4906491.666666667,
            "unit": "ns",
            "range": "± 160121.2065458985"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42348.75,
            "unit": "ns",
            "range": "± 2171.448431609473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6834621.428571428,
            "unit": "ns",
            "range": "± 50726.22108431206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17455200,
            "unit": "ns",
            "range": "± 118615.49525372186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44556253.84615385,
            "unit": "ns",
            "range": "± 264957.8539295908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 88230746.66666667,
            "unit": "ns",
            "range": "± 913815.469701989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 177987000,
            "unit": "ns",
            "range": "± 1272467.2986579444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831122.0703125,
            "unit": "ns",
            "range": "± 22904.587598787108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1493102.1205357143,
            "unit": "ns",
            "range": "± 1787.0699079046624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138561.8229166667,
            "unit": "ns",
            "range": "± 1043.201886382586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2567621.349158654,
            "unit": "ns",
            "range": "± 8258.1700567937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828953.7955729166,
            "unit": "ns",
            "range": "± 9172.175408059646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742935.3125,
            "unit": "ns",
            "range": "± 871.062548238036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2926616.6666666665,
            "unit": "ns",
            "range": "± 29481.511559103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3085208,
            "unit": "ns",
            "range": "± 33145.03381604349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3823225,
            "unit": "ns",
            "range": "± 70858.37047707678"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3779677.419354839,
            "unit": "ns",
            "range": "± 113715.48915217433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6243000,
            "unit": "ns",
            "range": "± 156849.0455084859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250154.05405405405,
            "unit": "ns",
            "range": "± 8505.017950029871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234155.55555555556,
            "unit": "ns",
            "range": "± 4850.8788524375295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219574.64788732395,
            "unit": "ns",
            "range": "± 10754.941964509142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3785433.3333333335,
            "unit": "ns",
            "range": "± 41932.66143757268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3419333.3333333335,
            "unit": "ns",
            "range": "± 58919.88103308068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16565.30612244898,
            "unit": "ns",
            "range": "± 1861.775122390962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76889.28571428571,
            "unit": "ns",
            "range": "± 4142.0563502866635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67068.68686868687,
            "unit": "ns",
            "range": "± 4799.609815447511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81165.9574468085,
            "unit": "ns",
            "range": "± 11295.413030299134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4054.081632653061,
            "unit": "ns",
            "range": "± 756.268425502308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14812.36559139785,
            "unit": "ns",
            "range": "± 1074.1947417256356"
          }
        ]
      }
    ]
  }
}