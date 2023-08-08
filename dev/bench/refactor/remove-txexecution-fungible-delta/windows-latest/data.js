window.BENCHMARK_DATA = {
  "lastUpdate": 1691463182737,
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
          "id": "8baa1b4083c0287391fb9c277de7b85761d2f44a",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-07T12:06:49+09:00",
          "tree_id": "89104245f00df6627deea8fceab4446cec039eb5",
          "url": "https://github.com/greymistcube/libplanet/commit/8baa1b4083c0287391fb9c277de7b85761d2f44a"
        },
        "date": 1691378519246,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1414658.5858585858,
            "unit": "ns",
            "range": "± 125180.39066140937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2609345.7627118644,
            "unit": "ns",
            "range": "± 113953.33031709304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1790085,
            "unit": "ns",
            "range": "± 111402.78579020446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4913697.46835443,
            "unit": "ns",
            "range": "± 254562.92606513214"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49208.9552238806,
            "unit": "ns",
            "range": "± 2345.3197328892866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7654201.785714285,
            "unit": "ns",
            "range": "± 328504.62484142865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20578000,
            "unit": "ns",
            "range": "± 342659.28899321164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52814835.71428572,
            "unit": "ns",
            "range": "± 713525.1217690968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105894420,
            "unit": "ns",
            "range": "± 1238388.38541988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207592384.6153846,
            "unit": "ns",
            "range": "± 1620263.4023753433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4908706.138392857,
            "unit": "ns",
            "range": "± 20687.128157623174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562968.8551682692,
            "unit": "ns",
            "range": "± 5319.194216388409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1204260.5078125,
            "unit": "ns",
            "range": "± 4559.050272321019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699666.2239583335,
            "unit": "ns",
            "range": "± 14881.25582986273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 857308.4830729166,
            "unit": "ns",
            "range": "± 3523.177261165364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783116.69921875,
            "unit": "ns",
            "range": "± 1948.5176960825702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292490.476190476,
            "unit": "ns",
            "range": "± 120154.59109307193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3433529.2682926827,
            "unit": "ns",
            "range": "± 121993.14374976659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4230577.2727272725,
            "unit": "ns",
            "range": "± 102546.77414451362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3844809.433962264,
            "unit": "ns",
            "range": "± 160210.35002596639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6252235.416666667,
            "unit": "ns",
            "range": "± 231328.20056911805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275128.7878787879,
            "unit": "ns",
            "range": "± 12860.21611436443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263103.4482758621,
            "unit": "ns",
            "range": "± 11388.436202080453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253619.19191919192,
            "unit": "ns",
            "range": "± 15907.062202423513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4289960,
            "unit": "ns",
            "range": "± 73974.25034622327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3935953.3333333335,
            "unit": "ns",
            "range": "± 69730.3568517089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23965.9793814433,
            "unit": "ns",
            "range": "± 3371.7541984211193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95309.09090909091,
            "unit": "ns",
            "range": "± 7610.90907318059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82859.375,
            "unit": "ns",
            "range": "± 6571.142304364632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104209.78260869565,
            "unit": "ns",
            "range": "± 12764.813069507694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5657.291666666667,
            "unit": "ns",
            "range": "± 1037.2783001344549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22067.391304347828,
            "unit": "ns",
            "range": "± 1935.7316074774649"
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
          "id": "917073df889842bbe7f26a42ba73d0c21ed374d8",
          "message": "Removed FungibleAssetsDelta and ExceptionMetadata",
          "timestamp": "2023-08-08T11:32:27+09:00",
          "tree_id": "634f0b227c902d6970a46e0063cb1670be8af2c1",
          "url": "https://github.com/greymistcube/libplanet/commit/917073df889842bbe7f26a42ba73d0c21ed374d8"
        },
        "date": 1691462967603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1515654.081632653,
            "unit": "ns",
            "range": "± 110008.48624094506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2776172.727272727,
            "unit": "ns",
            "range": "± 109740.26313771693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937121,
            "unit": "ns",
            "range": "± 143498.7687238205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4800693.333333333,
            "unit": "ns",
            "range": "± 141962.28963411698"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52019.14893617021,
            "unit": "ns",
            "range": "± 3576.7552002514426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7908950,
            "unit": "ns",
            "range": "± 180335.01924658634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21115213.333333332,
            "unit": "ns",
            "range": "± 174286.2582349045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53293413.333333336,
            "unit": "ns",
            "range": "± 349001.4630887602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108141733.33333333,
            "unit": "ns",
            "range": "± 964398.9539505693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212365630.76923078,
            "unit": "ns",
            "range": "± 2150186.795522897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4975431.184895833,
            "unit": "ns",
            "range": "± 25801.742760364607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1594323.032924107,
            "unit": "ns",
            "range": "± 4828.88937160467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1244947.7473958333,
            "unit": "ns",
            "range": "± 21631.500065571396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670557.840401786,
            "unit": "ns",
            "range": "± 7182.846251657251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844005.7552083334,
            "unit": "ns",
            "range": "± 2141.9337993702607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795651.0323660715,
            "unit": "ns",
            "range": "± 2065.863262989108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3463303.846153846,
            "unit": "ns",
            "range": "± 77887.72679065287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3707500,
            "unit": "ns",
            "range": "± 78530.59559461169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4372933.333333333,
            "unit": "ns",
            "range": "± 56628.370813156725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4073609.090909091,
            "unit": "ns",
            "range": "± 99662.4011306882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6365137.037037037,
            "unit": "ns",
            "range": "± 177851.19352154215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 284566.03773584904,
            "unit": "ns",
            "range": "± 11888.196204578244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273912.962962963,
            "unit": "ns",
            "range": "± 11505.717139937986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262242.6666666667,
            "unit": "ns",
            "range": "± 13178.762330984524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4355023.80952381,
            "unit": "ns",
            "range": "± 103589.49225071963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961792.8571428573,
            "unit": "ns",
            "range": "± 29380.853637012668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27214.893617021276,
            "unit": "ns",
            "range": "± 2099.664973112058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106585.56701030929,
            "unit": "ns",
            "range": "± 7211.015729578857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87542.55319148937,
            "unit": "ns",
            "range": "± 6263.020662565379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121389.47368421052,
            "unit": "ns",
            "range": "± 16639.944722214153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8025,
            "unit": "ns",
            "range": "± 1313.3324427817802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28604,
            "unit": "ns",
            "range": "± 3729.595531459521"
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
          "id": "5b05c68603eee8b1bbc15b694280e701f7e1a921",
          "message": "Changelog",
          "timestamp": "2023-08-08T11:35:19+09:00",
          "tree_id": "0f22f5d417c37c06ce4e19a79fa23616d7fae59e",
          "url": "https://github.com/greymistcube/libplanet/commit/5b05c68603eee8b1bbc15b694280e701f7e1a921"
        },
        "date": 1691463157116,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493742,
            "unit": "ns",
            "range": "± 146520.88704138377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2725502.3529411764,
            "unit": "ns",
            "range": "± 146769.27307242237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1767615.625,
            "unit": "ns",
            "range": "± 106338.73812949675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4944539,
            "unit": "ns",
            "range": "± 305863.2888954465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50409.375,
            "unit": "ns",
            "range": "± 5601.3358956403845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7399744.776119403,
            "unit": "ns",
            "range": "± 350599.07746061875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20204114.285714287,
            "unit": "ns",
            "range": "± 260890.6191583652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51582040,
            "unit": "ns",
            "range": "± 739795.2234040367"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105358580,
            "unit": "ns",
            "range": "± 1844948.1720169191"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211238945.83333334,
            "unit": "ns",
            "range": "± 5479919.031929543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5051296.979166667,
            "unit": "ns",
            "range": "± 90953.72776566554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1566455.5729166667,
            "unit": "ns",
            "range": "± 5778.483746592196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220251.3997395833,
            "unit": "ns",
            "range": "± 6001.023096171629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2687931.171875,
            "unit": "ns",
            "range": "± 15055.798365790062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846066.6927083334,
            "unit": "ns",
            "range": "± 3819.925817717065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779353.88671875,
            "unit": "ns",
            "range": "± 3890.57187334864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307845.3125,
            "unit": "ns",
            "range": "± 151167.63839629662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3671230.769230769,
            "unit": "ns",
            "range": "± 150384.36445956235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4115697.435897436,
            "unit": "ns",
            "range": "± 141606.83243845392"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4091871.875,
            "unit": "ns",
            "range": "± 127085.34910705204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6074423.076923077,
            "unit": "ns",
            "range": "± 62029.094703563016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273396.2962962963,
            "unit": "ns",
            "range": "± 13673.738007988566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257557.14285714287,
            "unit": "ns",
            "range": "± 9397.096182686792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253769,
            "unit": "ns",
            "range": "± 21988.53555741255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4164519.230769231,
            "unit": "ns",
            "range": "± 111238.33878382316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3917954.285714286,
            "unit": "ns",
            "range": "± 126116.14474914205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22565.59139784946,
            "unit": "ns",
            "range": "± 4376.779007832525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91381.31868131868,
            "unit": "ns",
            "range": "± 8530.77972322593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86068.75,
            "unit": "ns",
            "range": "± 14102.432134396646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110160.82474226804,
            "unit": "ns",
            "range": "± 24418.860353820397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7030.30303030303,
            "unit": "ns",
            "range": "± 1710.558719169096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21976.530612244896,
            "unit": "ns",
            "range": "± 2788.2226915014776"
          }
        ]
      }
    ]
  }
}