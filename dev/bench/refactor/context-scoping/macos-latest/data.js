window.BENCHMARK_DATA = {
  "lastUpdate": 1701243517369,
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
          "id": "9193e1dab4f058ea576f2fd5b09de97760f14914",
          "message": "Update docs",
          "timestamp": "2023-11-29T14:23:45+09:00",
          "tree_id": "8f30fcc334c316b7e5dd723ecf383ac89fbf6790",
          "url": "https://github.com/greymistcube/libplanet/commit/9193e1dab4f058ea576f2fd5b09de97760f14914"
        },
        "date": 1701236561754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8160484.214285715,
            "unit": "ns",
            "range": "± 91059.3222959023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21182546.29411765,
            "unit": "ns",
            "range": "± 410411.6938232214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50970184.56666667,
            "unit": "ns",
            "range": "± 764816.3114442641"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101627560.26666667,
            "unit": "ns",
            "range": "± 1118304.4641323544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232947284.13043478,
            "unit": "ns",
            "range": "± 5767152.646167512"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66458.73195876289,
            "unit": "ns",
            "range": "± 8853.859646263816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320942.1595744681,
            "unit": "ns",
            "range": "± 39484.67138433725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318022.48924731184,
            "unit": "ns",
            "range": "± 30941.315846887308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318488.4032258064,
            "unit": "ns",
            "range": "± 30629.566331819253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4430686.907216495,
            "unit": "ns",
            "range": "± 308667.48631837766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766964.4827586208,
            "unit": "ns",
            "range": "± 163465.8780140199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20142.659574468085,
            "unit": "ns",
            "range": "± 2678.4207162807643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97098.43157894736,
            "unit": "ns",
            "range": "± 12729.629139733895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104736.98351648351,
            "unit": "ns",
            "range": "± 13950.091482266851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114439.83673469388,
            "unit": "ns",
            "range": "± 24958.671252587126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6170.829896907217,
            "unit": "ns",
            "range": "± 1157.3551000165698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19183.920454545456,
            "unit": "ns",
            "range": "± 2504.1838564097566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392211.6836734693,
            "unit": "ns",
            "range": "± 144706.68126572506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2713640.125,
            "unit": "ns",
            "range": "± 109360.35921934461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2165060.27,
            "unit": "ns",
            "range": "± 256342.82039963885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8524181.952380951,
            "unit": "ns",
            "range": "± 310959.74258006626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3468738.8571428573,
            "unit": "ns",
            "range": "± 347820.40003252926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3713882.8210526314,
            "unit": "ns",
            "range": "± 400271.78195706557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4611912.344444444,
            "unit": "ns",
            "range": "± 357739.055366381"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4479038.674157304,
            "unit": "ns",
            "range": "± 459409.44090288284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18687459.652173914,
            "unit": "ns",
            "range": "± 2936448.03957679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6011202.235839844,
            "unit": "ns",
            "range": "± 115193.5352525462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1874120.763950893,
            "unit": "ns",
            "range": "± 29494.31858696441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143704.2189797794,
            "unit": "ns",
            "range": "± 21850.208799234606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2908136.3057421874,
            "unit": "ns",
            "range": "± 170823.49450625494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875926.2559244792,
            "unit": "ns",
            "range": "± 12130.016793513967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749420.2756476151,
            "unit": "ns",
            "range": "± 14148.721553788566"
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
          "id": "945df40952c9f9c6e38cf5e702e98c4ac1b473a5",
          "message": "Changelog",
          "timestamp": "2023-11-29T14:58:08+09:00",
          "tree_id": "2e82a3a795c60b593810ee928c8bdf58fe3b3ca0",
          "url": "https://github.com/greymistcube/libplanet/commit/945df40952c9f9c6e38cf5e702e98c4ac1b473a5"
        },
        "date": 1701238481321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7894642.733333333,
            "unit": "ns",
            "range": "± 140914.9855193684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19116488.923076924,
            "unit": "ns",
            "range": "± 615443.5161912605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48831711.222222224,
            "unit": "ns",
            "range": "± 978394.76945355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100546672.68518518,
            "unit": "ns",
            "range": "± 4951006.885415062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202294790.66666666,
            "unit": "ns",
            "range": "± 1820803.3706497983"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46214.96842105263,
            "unit": "ns",
            "range": "± 9014.975391397516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251216,
            "unit": "ns",
            "range": "± 29928.481246605133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221374.47368421053,
            "unit": "ns",
            "range": "± 11252.785245112946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218058.72222222222,
            "unit": "ns",
            "range": "± 24856.395717653086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3856839.806451613,
            "unit": "ns",
            "range": "± 114214.68306349506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3609859.076923077,
            "unit": "ns",
            "range": "± 124676.40887542788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19662.570707070707,
            "unit": "ns",
            "range": "± 4964.767506430555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76231.16666666667,
            "unit": "ns",
            "range": "± 14595.894092926605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82921.05208333333,
            "unit": "ns",
            "range": "± 21880.420153220755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79342.87634408602,
            "unit": "ns",
            "range": "± 14085.791443333477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5642.948979591837,
            "unit": "ns",
            "range": "± 1827.918778071321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17671.19,
            "unit": "ns",
            "range": "± 5104.776461424252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1171877.375,
            "unit": "ns",
            "range": "± 144937.72432173465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455734.965116279,
            "unit": "ns",
            "range": "± 148098.26870407982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1533751.0869565217,
            "unit": "ns",
            "range": "± 116146.02350424872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7081436.650537634,
            "unit": "ns",
            "range": "± 652912.8241031134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2957063.1224489794,
            "unit": "ns",
            "range": "± 106149.0221572626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3076583.1764705884,
            "unit": "ns",
            "range": "± 62547.924570119925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3670679.3,
            "unit": "ns",
            "range": "± 61809.41731100784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3514440.1231884058,
            "unit": "ns",
            "range": "± 169024.41255812912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13020427.091836736,
            "unit": "ns",
            "range": "± 2233470.403772707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4733936.845833333,
            "unit": "ns",
            "range": "± 167592.15821240982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1413843.5170898438,
            "unit": "ns",
            "range": "± 14472.205225473084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 932209.8505161831,
            "unit": "ns",
            "range": "± 15328.953531221407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982292.975360577,
            "unit": "ns",
            "range": "± 12269.220118150784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 731507.7072975852,
            "unit": "ns",
            "range": "± 80367.37995801165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596445.8363882211,
            "unit": "ns",
            "range": "± 9726.031911970234"
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
          "id": "47380aed4964f0228320a8f2b639315e02328140",
          "message": "Propagate TxContext usage inside ActionEvaluator",
          "timestamp": "2023-11-29T16:16:55+09:00",
          "tree_id": "89adb2202c38df2373f99ef6dede4376091c21ce",
          "url": "https://github.com/greymistcube/libplanet/commit/47380aed4964f0228320a8f2b639315e02328140"
        },
        "date": 1701243329697,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9049723.585365854,
            "unit": "ns",
            "range": "± 478490.0787006579"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22494920.858490568,
            "unit": "ns",
            "range": "± 938522.9360994102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54384963.821428575,
            "unit": "ns",
            "range": "± 1507459.1218316131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109836792.4,
            "unit": "ns",
            "range": "± 2841685.778907742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226477856.5,
            "unit": "ns",
            "range": "± 4165364.394779485"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68808.35632183908,
            "unit": "ns",
            "range": "± 7722.408209723501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331785.875,
            "unit": "ns",
            "range": "± 24159.399066617065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311058.0813953488,
            "unit": "ns",
            "range": "± 16229.01420257603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301752.5,
            "unit": "ns",
            "range": "± 7317.13980518149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080399.2666666666,
            "unit": "ns",
            "range": "± 46970.77487646162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3681176,
            "unit": "ns",
            "range": "± 38275.67490235501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20938.34375,
            "unit": "ns",
            "range": "± 4278.445173383052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102330.45789473684,
            "unit": "ns",
            "range": "± 14166.81875348001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99184.08,
            "unit": "ns",
            "range": "± 17454.83595181136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110151.93157894736,
            "unit": "ns",
            "range": "± 16814.307789481485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5116.565217391304,
            "unit": "ns",
            "range": "± 548.5672207669287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16964.97191011236,
            "unit": "ns",
            "range": "± 1175.831457173716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466858.58,
            "unit": "ns",
            "range": "± 164741.61895950147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2840541.7065217393,
            "unit": "ns",
            "range": "± 159972.17941794163"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090482.9020618557,
            "unit": "ns",
            "range": "± 167259.68648429977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9076576.773684211,
            "unit": "ns",
            "range": "± 638881.2514298599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3610735.551020408,
            "unit": "ns",
            "range": "± 251711.57229615308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3628347.5,
            "unit": "ns",
            "range": "± 240274.43505103645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4843946.965909091,
            "unit": "ns",
            "range": "± 265455.5641325274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4369306.926315789,
            "unit": "ns",
            "range": "± 346367.4300283616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 18287700.691919193,
            "unit": "ns",
            "range": "± 3052875.0181648005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6030734.50015625,
            "unit": "ns",
            "range": "± 238658.7717284559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915719.3014573317,
            "unit": "ns",
            "range": "± 26479.904481937392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1103726.9872395834,
            "unit": "ns",
            "range": "± 17096.705221583856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3007448.37890625,
            "unit": "ns",
            "range": "± 106492.5456818868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821342.4304036458,
            "unit": "ns",
            "range": "± 12239.87211333469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860841.2994495739,
            "unit": "ns",
            "range": "± 19144.09747002201"
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
          "id": "6df8806639dc56ce3c1e5179abc5f961f73c7bf4",
          "message": "Propagate TxContext usage inside ActionEvaluator",
          "timestamp": "2023-11-29T16:23:36+09:00",
          "tree_id": "4a3d52b03284e22bc5bfc9961f5c6a72e8f83202",
          "url": "https://github.com/greymistcube/libplanet/commit/6df8806639dc56ce3c1e5179abc5f961f73c7bf4"
        },
        "date": 1701243500278,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8369927.142857143,
            "unit": "ns",
            "range": "± 112720.00899905595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22348213.479591835,
            "unit": "ns",
            "range": "± 1866604.9800375588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54132331.87777778,
            "unit": "ns",
            "range": "± 2046222.5283066365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106886183.25510204,
            "unit": "ns",
            "range": "± 4261774.5733368145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210308432.44444445,
            "unit": "ns",
            "range": "± 4080455.5786413685"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59138.20930232558,
            "unit": "ns",
            "range": "± 8877.683105426946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261010.02808988764,
            "unit": "ns",
            "range": "± 20217.6851673175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 252234.44318181818,
            "unit": "ns",
            "range": "± 18917.975421955176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249610.914893617,
            "unit": "ns",
            "range": "± 9673.182853349697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4005019.595238095,
            "unit": "ns",
            "range": "± 93657.49980001856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3636318.3571428573,
            "unit": "ns",
            "range": "± 37645.52395266043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19524.627659574468,
            "unit": "ns",
            "range": "± 4695.448681674359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81708.94086021505,
            "unit": "ns",
            "range": "± 14012.296789406057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86326.95360824742,
            "unit": "ns",
            "range": "± 17667.39065164773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93419.72340425532,
            "unit": "ns",
            "range": "± 15311.242763768696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.691489361702,
            "unit": "ns",
            "range": "± 1276.6961080009823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20567.042105263157,
            "unit": "ns",
            "range": "± 3135.595250136148"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1115652.6195652173,
            "unit": "ns",
            "range": "± 103785.32684448373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2456264.175824176,
            "unit": "ns",
            "range": "± 143956.06878609362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1651122.8163265307,
            "unit": "ns",
            "range": "± 141856.1708310113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7137655.813953488,
            "unit": "ns",
            "range": "± 661437.6477019186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3117208.933333333,
            "unit": "ns",
            "range": "± 118111.47229022096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3193260.8585858587,
            "unit": "ns",
            "range": "± 195665.02932797823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3796133.794117647,
            "unit": "ns",
            "range": "± 76086.98358027863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3590284.6627906975,
            "unit": "ns",
            "range": "± 132950.01707944702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14226825.005263157,
            "unit": "ns",
            "range": "± 3107499.053674962"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4739413.485877404,
            "unit": "ns",
            "range": "± 194137.89117198193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1397276.054296875,
            "unit": "ns",
            "range": "± 15101.947263274467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 906358.9113051471,
            "unit": "ns",
            "range": "± 17899.26494638606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2039253.6254507212,
            "unit": "ns",
            "range": "± 16208.770518712485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620895.1834435096,
            "unit": "ns",
            "range": "± 8535.8802313027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577653.2034254808,
            "unit": "ns",
            "range": "± 4984.673366192872"
          }
        ]
      }
    ]
  }
}