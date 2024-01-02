window.BENCHMARK_DATA = {
  "lastUpdate": 1704204240033,
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
          "id": "f12184e29d683f480dd46778870e43c10233e50a",
          "message": "Roll back exposed GraphQL API changes by adding LegacyBencodexValueType",
          "timestamp": "2024-01-02T22:40:20+09:00",
          "tree_id": "f983da298ebf7f6783db8aa8342ab7ceefac443f",
          "url": "https://github.com/greymistcube/libplanet/commit/f12184e29d683f480dd46778870e43c10233e50a"
        },
        "date": 1704203595978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956234.7368421053,
            "unit": "ns",
            "range": "± 115307.9067322931"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1744685.9649122807,
            "unit": "ns",
            "range": "± 75530.38045003692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1364495.918367347,
            "unit": "ns",
            "range": "± 87758.04855545337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334283.561643835,
            "unit": "ns",
            "range": "± 261887.98390708247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33809.77011494253,
            "unit": "ns",
            "range": "± 2402.298307005332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5023813.333333333,
            "unit": "ns",
            "range": "± 33662.18452012089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13097028.57142857,
            "unit": "ns",
            "range": "± 92027.44096251884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32186473.333333332,
            "unit": "ns",
            "range": "± 319747.349964818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64800578.571428575,
            "unit": "ns",
            "range": "± 497524.4411136949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130296653.33333333,
            "unit": "ns",
            "range": "± 1058378.160790412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3285877.1334134615,
            "unit": "ns",
            "range": "± 6590.031051322137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1065609.765625,
            "unit": "ns",
            "range": "± 3355.581181793725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736222.7678571428,
            "unit": "ns",
            "range": "± 1145.928037608578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1925425.376674107,
            "unit": "ns",
            "range": "± 7647.298843449205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617860.44921875,
            "unit": "ns",
            "range": "± 1844.6880515663981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555792.3409598215,
            "unit": "ns",
            "range": "± 1045.8997517267885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2111916.129032258,
            "unit": "ns",
            "range": "± 63328.277500519434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241884.745762712,
            "unit": "ns",
            "range": "± 98548.34069101057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2726355.128205128,
            "unit": "ns",
            "range": "± 93466.61928398753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2522425.806451613,
            "unit": "ns",
            "range": "± 83044.27208656931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6201569.565217392,
            "unit": "ns",
            "range": "± 298863.30059486267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170839.2857142857,
            "unit": "ns",
            "range": "± 8796.2617725029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161122.22222222222,
            "unit": "ns",
            "range": "± 7357.2532664874425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139152.1739130435,
            "unit": "ns",
            "range": "± 3519.797200410247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731447.8260869565,
            "unit": "ns",
            "range": "± 67593.32181621346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2435853.3333333335,
            "unit": "ns",
            "range": "± 28745.10807242231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10277.659574468085,
            "unit": "ns",
            "range": "± 1128.4354241693438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51267.74193548387,
            "unit": "ns",
            "range": "± 4728.708834029289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43865.625,
            "unit": "ns",
            "range": "± 2026.5866799691967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56051.54639175258,
            "unit": "ns",
            "range": "± 11623.405924775072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2644.7916666666665,
            "unit": "ns",
            "range": "± 573.6071994825776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9884.946236559139,
            "unit": "ns",
            "range": "± 1755.6707027923235"
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
          "id": "14195aed74f84db63008589a07b131e635f84ea9",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:50:05+09:00",
          "tree_id": "b5c7655d8f7b38eb6c79a3965935caaa3fe4a711",
          "url": "https://github.com/greymistcube/libplanet/commit/14195aed74f84db63008589a07b131e635f84ea9"
        },
        "date": 1704204143629,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 929288.775510204,
            "unit": "ns",
            "range": "± 87566.16924602396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1722531.5789473683,
            "unit": "ns",
            "range": "± 75045.20275234354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1348515.306122449,
            "unit": "ns",
            "range": "± 119514.45614328384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5245636.956521739,
            "unit": "ns",
            "range": "± 295351.21864565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33459.45945945946,
            "unit": "ns",
            "range": "± 1681.887305764823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5009960,
            "unit": "ns",
            "range": "± 34809.29268374836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13067800,
            "unit": "ns",
            "range": "± 51132.35054960091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32242340,
            "unit": "ns",
            "range": "± 353961.5794324092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65666500,
            "unit": "ns",
            "range": "± 913318.8068014054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 135697646.15384614,
            "unit": "ns",
            "range": "± 967178.0925415482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3316977.6506696427,
            "unit": "ns",
            "range": "± 7087.914512193218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049979.0885416667,
            "unit": "ns",
            "range": "± 1582.17875653457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 723455.0716145834,
            "unit": "ns",
            "range": "± 1565.8781603333373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912715.6901041667,
            "unit": "ns",
            "range": "± 2653.5608275889435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 594898.9778645834,
            "unit": "ns",
            "range": "± 1081.5224427083865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562491.7668269231,
            "unit": "ns",
            "range": "± 1409.5190677382734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2069722.7272727273,
            "unit": "ns",
            "range": "± 36253.4849795185"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2243032.1428571427,
            "unit": "ns",
            "range": "± 94500.61107477821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2723860.606060606,
            "unit": "ns",
            "range": "± 86267.76244415529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2638632.3076923075,
            "unit": "ns",
            "range": "± 122569.17703343631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6223480.327868853,
            "unit": "ns",
            "range": "± 279710.7659825724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165020.37037037036,
            "unit": "ns",
            "range": "± 6922.383154628389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162333.05084745763,
            "unit": "ns",
            "range": "± 7045.398413696331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141390,
            "unit": "ns",
            "range": "± 3193.7274049051375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2720100,
            "unit": "ns",
            "range": "± 53026.634816854064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2422561.5384615385,
            "unit": "ns",
            "range": "± 32932.292623440255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10406.593406593407,
            "unit": "ns",
            "range": "± 1485.0216756968155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52733.333333333336,
            "unit": "ns",
            "range": "± 3947.628163333273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44556,
            "unit": "ns",
            "range": "± 1806.582069962559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51691.397849462366,
            "unit": "ns",
            "range": "± 9761.900829622611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2452.0408163265306,
            "unit": "ns",
            "range": "± 475.1515421500536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9867.021276595744,
            "unit": "ns",
            "range": "± 1303.4601014613295"
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
          "id": "24a7e67501c7a128e5d2e6edcf960115525bbbcb",
          "message": "Changelog",
          "timestamp": "2024-01-02T22:51:38+09:00",
          "tree_id": "3c8dd8c8e28d5b04d48efc66c1ae418f28de7ad8",
          "url": "https://github.com/greymistcube/libplanet/commit/24a7e67501c7a128e5d2e6edcf960115525bbbcb"
        },
        "date": 1704204218310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 924418.3673469388,
            "unit": "ns",
            "range": "± 69096.48766483173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1765036.3636363635,
            "unit": "ns",
            "range": "± 115358.30468636107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1321382.4742268042,
            "unit": "ns",
            "range": "± 120960.1087913467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5331854.444444444,
            "unit": "ns",
            "range": "± 295092.4856589617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33422.22222222222,
            "unit": "ns",
            "range": "± 1889.936553110057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4865840,
            "unit": "ns",
            "range": "± 33802.99648594147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12616628.57142857,
            "unit": "ns",
            "range": "± 123752.09355538459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31074378.57142857,
            "unit": "ns",
            "range": "± 209124.0492316294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64436120,
            "unit": "ns",
            "range": "± 575061.984485151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 126572061.53846154,
            "unit": "ns",
            "range": "± 425545.3061239221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3227308.2589285714,
            "unit": "ns",
            "range": "± 11330.116978021071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080985.1981026786,
            "unit": "ns",
            "range": "± 2903.454856321173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734082.4609375,
            "unit": "ns",
            "range": "± 5216.536300286124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1917472.084263393,
            "unit": "ns",
            "range": "± 3564.9767590421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604510.390625,
            "unit": "ns",
            "range": "± 1491.2670103557161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553593.5267857143,
            "unit": "ns",
            "range": "± 968.0506780383308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164964.285714286,
            "unit": "ns",
            "range": "± 22392.533341508046"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211023.529411765,
            "unit": "ns",
            "range": "± 43203.23381142557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2747225.641025641,
            "unit": "ns",
            "range": "± 92217.7535080869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2622800,
            "unit": "ns",
            "range": "± 86711.38992575971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6004683.333333333,
            "unit": "ns",
            "range": "± 139625.52609115528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168612.67605633804,
            "unit": "ns",
            "range": "± 8251.803778178524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162778.125,
            "unit": "ns",
            "range": "± 7338.428289620657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142366.66666666666,
            "unit": "ns",
            "range": "± 4159.271598475514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2659842.8571428573,
            "unit": "ns",
            "range": "± 43123.30646459708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2467525,
            "unit": "ns",
            "range": "± 45692.909734443485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11384.269662921348,
            "unit": "ns",
            "range": "± 1157.868228921787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56869.69696969697,
            "unit": "ns",
            "range": "± 8816.397692628354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44187.5,
            "unit": "ns",
            "range": "± 2326.042708882256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54978.57142857143,
            "unit": "ns",
            "range": "± 12637.638106355811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2522.222222222222,
            "unit": "ns",
            "range": "± 491.05375148559096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10157.777777777777,
            "unit": "ns",
            "range": "± 1682.1587105830747"
          }
        ]
      }
    ]
  }
}