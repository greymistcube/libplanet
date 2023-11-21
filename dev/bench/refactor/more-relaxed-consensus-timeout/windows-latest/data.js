window.BENCHMARK_DATA = {
  "lastUpdate": 1700527369801,
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
          "id": "2ae593ded64ac7056f5adb3dd7daa09963e75495",
          "message": "Changed default ContextTimeoutOption values",
          "timestamp": "2023-11-21T09:26:48+09:00",
          "tree_id": "e18ded43cd8ed7dcf96832af16e16975454e9894",
          "url": "https://github.com/greymistcube/libplanet/commit/2ae593ded64ac7056f5adb3dd7daa09963e75495"
        },
        "date": 1700527146437,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 934954.7368421053,
            "unit": "ns",
            "range": "± 104038.64233862364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1652285.9649122807,
            "unit": "ns",
            "range": "± 65060.70088385728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1308778.7878787878,
            "unit": "ns",
            "range": "± 120792.26582952261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4917097.777777778,
            "unit": "ns",
            "range": "± 273602.0636042232"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34314.28571428572,
            "unit": "ns",
            "range": "± 1684.3082882708522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5143850,
            "unit": "ns",
            "range": "± 40146.553640764345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13112228.57142857,
            "unit": "ns",
            "range": "± 118588.53997409198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32585506.666666668,
            "unit": "ns",
            "range": "± 213318.8675154995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66520320,
            "unit": "ns",
            "range": "± 422026.25375341624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129567130.76923077,
            "unit": "ns",
            "range": "± 405349.83323999564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3144906.3058035714,
            "unit": "ns",
            "range": "± 3781.1432652942513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1009966.40625,
            "unit": "ns",
            "range": "± 1595.660278790971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 682596.4494977678,
            "unit": "ns",
            "range": "± 1172.9642846624106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1873326.381138393,
            "unit": "ns",
            "range": "± 3616.995877968142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615252.880859375,
            "unit": "ns",
            "range": "± 1982.7298452544815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552243.9243861607,
            "unit": "ns",
            "range": "± 2868.00427767604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2124552.6315789474,
            "unit": "ns",
            "range": "± 72746.0772113822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2197958.108108108,
            "unit": "ns",
            "range": "± 38754.29996485249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2778013.0434782607,
            "unit": "ns",
            "range": "± 70139.88169331745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2718895,
            "unit": "ns",
            "range": "± 61211.931026557235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5649600,
            "unit": "ns",
            "range": "± 125953.17766123633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165835.7142857143,
            "unit": "ns",
            "range": "± 7119.612567891817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162598.88888888888,
            "unit": "ns",
            "range": "± 11665.742553020717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 137797.22222222222,
            "unit": "ns",
            "range": "± 4439.658037739337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2708150,
            "unit": "ns",
            "range": "± 40361.515371414425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472192.3076923075,
            "unit": "ns",
            "range": "± 27754.14267992142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9797.777777777777,
            "unit": "ns",
            "range": "± 1131.2693256431353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49522.07792207792,
            "unit": "ns",
            "range": "± 2356.8278958571336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43585.48387096774,
            "unit": "ns",
            "range": "± 1983.4435012589618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47134.73684210526,
            "unit": "ns",
            "range": "± 9124.02449954564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2202.197802197802,
            "unit": "ns",
            "range": "± 327.2708772656484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9027.956989247312,
            "unit": "ns",
            "range": "± 1017.0679930455946"
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
          "id": "1dd52810df4744e86ccb4ae280b6cc49ed6eb561",
          "message": "Changelog",
          "timestamp": "2023-11-21T09:29:08+09:00",
          "tree_id": "0f384439f7451e7b350fb82a0c0179dc746c7853",
          "url": "https://github.com/greymistcube/libplanet/commit/1dd52810df4744e86ccb4ae280b6cc49ed6eb561"
        },
        "date": 1700527340165,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947394.5054945055,
            "unit": "ns",
            "range": "± 77077.77365555646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1776641.5384615385,
            "unit": "ns",
            "range": "± 82096.44079584787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1393293.8144329898,
            "unit": "ns",
            "range": "± 136666.3202341389"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5051169.3877551025,
            "unit": "ns",
            "range": "± 201107.49530628472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35168.131868131866,
            "unit": "ns",
            "range": "± 2654.4670576587237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5275271.428571428,
            "unit": "ns",
            "range": "± 74873.04309574697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14363646.153846154,
            "unit": "ns",
            "range": "± 210000.12148958634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33778321.428571425,
            "unit": "ns",
            "range": "± 510542.11485827103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66483786.666666664,
            "unit": "ns",
            "range": "± 1102471.415156917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132209233.33333333,
            "unit": "ns",
            "range": "± 1663078.7983507605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3225970.6510416665,
            "unit": "ns",
            "range": "± 10336.594357252194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1024679.8958333334,
            "unit": "ns",
            "range": "± 6366.0381394544365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 693839.9283854166,
            "unit": "ns",
            "range": "± 5074.780038992475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1890556.6796875,
            "unit": "ns",
            "range": "± 7628.427546202045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608267.5651041666,
            "unit": "ns",
            "range": "± 1997.6493300787247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583087.6395089285,
            "unit": "ns",
            "range": "± 896.262002873606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2146050,
            "unit": "ns",
            "range": "± 51887.7114546402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2305180,
            "unit": "ns",
            "range": "± 80821.40868955516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2759278.787878788,
            "unit": "ns",
            "range": "± 78281.53820336472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2745323.076923077,
            "unit": "ns",
            "range": "± 43835.471820702354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6096177.586206896,
            "unit": "ns",
            "range": "± 265100.96043894364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173286.81318681317,
            "unit": "ns",
            "range": "± 11600.174412397704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165900.54945054944,
            "unit": "ns",
            "range": "± 10749.484469564872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140070,
            "unit": "ns",
            "range": "± 3094.6643385706716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2785486.6666666665,
            "unit": "ns",
            "range": "± 40534.07502454248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520053.846153846,
            "unit": "ns",
            "range": "± 35932.07980307234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10991.304347826086,
            "unit": "ns",
            "range": "± 1773.532649882902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52884.782608695656,
            "unit": "ns",
            "range": "± 4908.815456196221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46827.65957446808,
            "unit": "ns",
            "range": "± 3282.1905960304593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65817.17171717172,
            "unit": "ns",
            "range": "± 16845.795456797317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2731.5789473684213,
            "unit": "ns",
            "range": "± 502.6024099930232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11451.578947368422,
            "unit": "ns",
            "range": "± 2072.2514817964034"
          }
        ]
      }
    ]
  }
}