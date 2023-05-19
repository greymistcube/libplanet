window.BENCHMARK_DATA = {
  "lastUpdate": 1684468910624,
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
          "id": "8aba8aef32232d502aaa8404b23532abd679bd9e",
          "message": "Removed t from BlockCompletion",
          "timestamp": "2023-05-19T12:13:30+09:00",
          "tree_id": "758f003cc68e38226c3434603c44a525979ac94b",
          "url": "https://github.com/greymistcube/libplanet/commit/8aba8aef32232d502aaa8404b23532abd679bd9e"
        },
        "date": 1684467389301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466015.3846153845,
            "unit": "ns",
            "range": "± 51275.820394070935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2656782.5581395347,
            "unit": "ns",
            "range": "± 144546.43722946572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076412.5,
            "unit": "ns",
            "range": "± 115403.53661460248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5391909.375,
            "unit": "ns",
            "range": "± 310880.37945846125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48821.59090909091,
            "unit": "ns",
            "range": "± 2697.7405984393918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6848017.647058823,
            "unit": "ns",
            "range": "± 138440.58398503542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18992820,
            "unit": "ns",
            "range": "± 298472.55245906377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49262440,
            "unit": "ns",
            "range": "± 813790.8644995084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96479047.61904761,
            "unit": "ns",
            "range": "± 2289533.136388082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190449473.91304347,
            "unit": "ns",
            "range": "± 4808611.363454431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4724513.645833333,
            "unit": "ns",
            "range": "± 39441.47780459006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507122.1028645833,
            "unit": "ns",
            "range": "± 7587.463250134438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161448.4700520833,
            "unit": "ns",
            "range": "± 6751.867399171862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622585.8984375,
            "unit": "ns",
            "range": "± 9437.07543036491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824121.3932291666,
            "unit": "ns",
            "range": "± 3135.5202651854374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759261.6666666666,
            "unit": "ns",
            "range": "± 2311.321507000851"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3000840,
            "unit": "ns",
            "range": "± 120554.48933141885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3151276.595744681,
            "unit": "ns",
            "range": "± 186621.5729473999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3911156,
            "unit": "ns",
            "range": "± 103050.55830351754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3935537.9310344825,
            "unit": "ns",
            "range": "± 160741.73229409792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6394120,
            "unit": "ns",
            "range": "± 224448.5552386514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260530,
            "unit": "ns",
            "range": "± 13480.29410339122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248498.38709677418,
            "unit": "ns",
            "range": "± 11331.24928993491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224006,
            "unit": "ns",
            "range": "± 15705.965025229661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3985205.882352941,
            "unit": "ns",
            "range": "± 78567.75317033888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3441882.6086956523,
            "unit": "ns",
            "range": "± 67057.2391331324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18463.440860215054,
            "unit": "ns",
            "range": "± 1678.1709081639895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84934.06593406593,
            "unit": "ns",
            "range": "± 6826.015915927334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69156.94444444444,
            "unit": "ns",
            "range": "± 3151.9645735519375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98261.61616161616,
            "unit": "ns",
            "range": "± 19320.464497050198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5108.333333333333,
            "unit": "ns",
            "range": "± 892.8566416038693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18145.918367346938,
            "unit": "ns",
            "range": "± 2444.314605400587"
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
          "id": "249122e6eec54718ebec56af1d1d48ffc83915a5",
          "message": "Changelog",
          "timestamp": "2023-05-19T12:19:43+09:00",
          "tree_id": "876e6324e9b02798028790be7c80ce480be47c3e",
          "url": "https://github.com/greymistcube/libplanet/commit/249122e6eec54718ebec56af1d1d48ffc83915a5"
        },
        "date": 1684467433968,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1447208.4210526317,
            "unit": "ns",
            "range": "± 116739.99539179426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2630975,
            "unit": "ns",
            "range": "± 121228.79850638457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2187060.227272727,
            "unit": "ns",
            "range": "± 120423.18058802575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5428583,
            "unit": "ns",
            "range": "± 337398.6052119805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48571.57894736842,
            "unit": "ns",
            "range": "± 3832.3556212938684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6860820,
            "unit": "ns",
            "range": "± 56041.08441899695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18701872,
            "unit": "ns",
            "range": "± 498363.9128187353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46901028.571428575,
            "unit": "ns",
            "range": "± 791326.9366446087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97742096.66666667,
            "unit": "ns",
            "range": "± 2904836.411766838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185225800,
            "unit": "ns",
            "range": "± 3057666.7635867153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4740452.708333333,
            "unit": "ns",
            "range": "± 25245.151915044622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507401.1979166667,
            "unit": "ns",
            "range": "± 10346.34797112936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1175965.1888020833,
            "unit": "ns",
            "range": "± 10694.608294408987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672596.0026041665,
            "unit": "ns",
            "range": "± 11350.61192957321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836942.9036458334,
            "unit": "ns",
            "range": "± 2811.1482460306665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769755.4296875,
            "unit": "ns",
            "range": "± 2446.4594612359215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3006597.3684210526,
            "unit": "ns",
            "range": "± 103732.53415171285"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3137133.3333333335,
            "unit": "ns",
            "range": "± 151618.49361352262"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3900525,
            "unit": "ns",
            "range": "± 130260.30066206444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3961977.3584905663,
            "unit": "ns",
            "range": "± 163665.07973192533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6582322.549019608,
            "unit": "ns",
            "range": "± 267637.6887349249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264593.07692307694,
            "unit": "ns",
            "range": "± 12339.380166143494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253450,
            "unit": "ns",
            "range": "± 13138.58940851603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221820.45454545456,
            "unit": "ns",
            "range": "± 12195.487756957245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3853211.7647058824,
            "unit": "ns",
            "range": "± 78983.32800623924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3574707.1428571427,
            "unit": "ns",
            "range": "± 53638.85595472622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19578.350515463917,
            "unit": "ns",
            "range": "± 2208.5169799798023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83158.33333333333,
            "unit": "ns",
            "range": "± 6561.717789639935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69314.28571428571,
            "unit": "ns",
            "range": "± 2260.679603328955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96789.58333333333,
            "unit": "ns",
            "range": "± 16404.084723447242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5377.083333333333,
            "unit": "ns",
            "range": "± 987.7650654692154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16676.08695652174,
            "unit": "ns",
            "range": "± 1902.8243649333597"
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
          "id": "621faf1cc3185543ff81b6fd854ef48e164acb9b",
          "message": "Removed t from swarm",
          "timestamp": "2023-05-19T12:43:53+09:00",
          "tree_id": "bf4dabeb40455252b8b6d33e0a715f9d6624b797",
          "url": "https://github.com/greymistcube/libplanet/commit/621faf1cc3185543ff81b6fd854ef48e164acb9b"
        },
        "date": 1684468881603,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422718.5567010308,
            "unit": "ns",
            "range": "± 126735.55500356582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651329.0322580645,
            "unit": "ns",
            "range": "± 80287.99077300161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2200503.2258064514,
            "unit": "ns",
            "range": "± 122719.87051784177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5142281.25,
            "unit": "ns",
            "range": "± 89287.02196661431"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52494.21052631579,
            "unit": "ns",
            "range": "± 4408.3025099279375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7294474.074074074,
            "unit": "ns",
            "range": "± 202923.7268467611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19964935.714285713,
            "unit": "ns",
            "range": "± 129172.99436231812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51006896.15384615,
            "unit": "ns",
            "range": "± 393652.7480224684"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101584393.33333333,
            "unit": "ns",
            "range": "± 668892.8138206842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203188093.33333334,
            "unit": "ns",
            "range": "± 1164922.140541508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4844813.125,
            "unit": "ns",
            "range": "± 15582.720852170474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507921.5364583333,
            "unit": "ns",
            "range": "± 5434.044710931124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219541.4713541667,
            "unit": "ns",
            "range": "± 4838.963127397493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661834.8697916665,
            "unit": "ns",
            "range": "± 11317.508178645065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841412.6041666666,
            "unit": "ns",
            "range": "± 2453.57557647676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770120.1102120535,
            "unit": "ns",
            "range": "± 2146.30244568699"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3329231.5789473685,
            "unit": "ns",
            "range": "± 69570.39642318802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3492038.2978723403,
            "unit": "ns",
            "range": "± 136058.01280782284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4242357.142857143,
            "unit": "ns",
            "range": "± 73475.30945086996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4420686.666666667,
            "unit": "ns",
            "range": "± 60048.05060076789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6663627.777777778,
            "unit": "ns",
            "range": "± 102699.01658017932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270839.4736842105,
            "unit": "ns",
            "range": "± 9343.433580159723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259583.67346938775,
            "unit": "ns",
            "range": "± 9237.115958159766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253454.54545454544,
            "unit": "ns",
            "range": "± 12984.966463837542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4091046.6666666665,
            "unit": "ns",
            "range": "± 45642.772337651295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3704807.1428571427,
            "unit": "ns",
            "range": "± 54732.615283980136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22899.462365591397,
            "unit": "ns",
            "range": "± 2090.2269304673273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93073.68421052632,
            "unit": "ns",
            "range": "± 5619.139226242484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81102.1052631579,
            "unit": "ns",
            "range": "± 5726.9422784887765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105096.90721649484,
            "unit": "ns",
            "range": "± 14288.620571456559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6755.789473684211,
            "unit": "ns",
            "range": "± 1142.1066564824998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22107.36842105263,
            "unit": "ns",
            "range": "± 2035.0253333810851"
          }
        ]
      }
    ]
  }
}