window.BENCHMARK_DATA = {
  "lastUpdate": 1695173630178,
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
          "id": "83ea68379a7ee1222db323c0b069033faeb46d6c",
          "message": "Remove unused ExceptionMetadata from TxFailure",
          "timestamp": "2023-09-20T09:13:08+09:00",
          "tree_id": "520c196eeee8ba5ec7c963827cf256c6ad7f685b",
          "url": "https://github.com/greymistcube/libplanet/commit/83ea68379a7ee1222db323c0b069033faeb46d6c"
        },
        "date": 1695170151061,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276662,
            "unit": "ns",
            "range": "± 9639.010887721677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276444.4482758621,
            "unit": "ns",
            "range": "± 7891.443361488836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248546.7,
            "unit": "ns",
            "range": "± 11007.997432221566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534447.555555556,
            "unit": "ns",
            "range": "± 87362.06058037821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4194882.214285715,
            "unit": "ns",
            "range": "± 51588.740918595155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21481.852631578946,
            "unit": "ns",
            "range": "± 1967.8956249805196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91108.92222222222,
            "unit": "ns",
            "range": "± 5065.384136919608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78331.20212765958,
            "unit": "ns",
            "range": "± 4944.460477172207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80859.73493975903,
            "unit": "ns",
            "range": "± 7575.133977861039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5298.968085106383,
            "unit": "ns",
            "range": "± 874.6741507202723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19751.795698924732,
            "unit": "ns",
            "range": "± 1866.7360410453919"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3595438.7647058824,
            "unit": "ns",
            "range": "± 115022.9021967414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3875151.230769231,
            "unit": "ns",
            "range": "± 102523.38091354877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4440566,
            "unit": "ns",
            "range": "± 117995.50653555979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4142729.1428571427,
            "unit": "ns",
            "range": "± 97342.9560565559"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6304449.035714285,
            "unit": "ns",
            "range": "± 178103.64539378253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477629.7252747254,
            "unit": "ns",
            "range": "± 78996.39818949073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758897.923076923,
            "unit": "ns",
            "range": "± 28348.11258991075"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1856462.6547619049,
            "unit": "ns",
            "range": "± 97482.27923156382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4933290.371428572,
            "unit": "ns",
            "range": "± 237933.12530900218"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49722.296703296706,
            "unit": "ns",
            "range": "± 2790.746317920891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8011653.076923077,
            "unit": "ns",
            "range": "± 54797.43805364982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22026321,
            "unit": "ns",
            "range": "± 254112.3027923453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56574781.46666667,
            "unit": "ns",
            "range": "± 979816.6493187727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112332100.55555555,
            "unit": "ns",
            "range": "± 3086654.698876157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225477636.06666666,
            "unit": "ns",
            "range": "± 3238697.5416508424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5050957.24609375,
            "unit": "ns",
            "range": "± 9917.150804075245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1593108.8194110577,
            "unit": "ns",
            "range": "± 4603.659621135214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092125.23046875,
            "unit": "ns",
            "range": "± 1304.3412039446564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611592.675480769,
            "unit": "ns",
            "range": "± 4876.13132535741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825569.302358774,
            "unit": "ns",
            "range": "± 598.7398934348938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762232.2915414664,
            "unit": "ns",
            "range": "± 920.9416979668373"
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
          "id": "e3c71bf71f7add86da3a4f1bdcdd534debca8ff4",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:31:37+09:00",
          "tree_id": "88052e6e74edf532d224a56d2f07237a4d9c9bd6",
          "url": "https://github.com/greymistcube/libplanet/commit/e3c71bf71f7add86da3a4f1bdcdd534debca8ff4"
        },
        "date": 1695170668962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264696.17391304346,
            "unit": "ns",
            "range": "± 6554.825437327374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256187.0909090909,
            "unit": "ns",
            "range": "± 9431.441128427045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218397,
            "unit": "ns",
            "range": "± 3602.5631900719713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113162.076923077,
            "unit": "ns",
            "range": "± 28993.45241159786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3802051.066666667,
            "unit": "ns",
            "range": "± 52481.30565730276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18673.44210526316,
            "unit": "ns",
            "range": "± 1145.6217183750236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83381.67142857143,
            "unit": "ns",
            "range": "± 3805.9480401969613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68679.13333333333,
            "unit": "ns",
            "range": "± 1254.8045304045604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76930.63265306123,
            "unit": "ns",
            "range": "± 11973.175493136241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4859.1122448979595,
            "unit": "ns",
            "range": "± 415.5901252672529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16689.833333333332,
            "unit": "ns",
            "range": "± 1079.4292733568861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3223910.28,
            "unit": "ns",
            "range": "± 85044.30670270251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406048.230769231,
            "unit": "ns",
            "range": "± 92801.5581094661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4187603.095238095,
            "unit": "ns",
            "range": "± 95450.98078694883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3710147.727272727,
            "unit": "ns",
            "range": "± 89294.26074298598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5910926.466666667,
            "unit": "ns",
            "range": "± 153341.66471185288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1297044.5333333334,
            "unit": "ns",
            "range": "± 65299.92915114185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2486466.882352941,
            "unit": "ns",
            "range": "± 48065.118569606115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1614349.3977272727,
            "unit": "ns",
            "range": "± 88659.2986593681"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4320832.358974359,
            "unit": "ns",
            "range": "± 129740.09507584306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47138.80263157895,
            "unit": "ns",
            "range": "± 2390.010945691738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671719.333333333,
            "unit": "ns",
            "range": "± 19080.39108489082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19476116.866666667,
            "unit": "ns",
            "range": "± 175833.60526843334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49552285.5,
            "unit": "ns",
            "range": "± 270986.8109123082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99944391.46666667,
            "unit": "ns",
            "range": "± 664828.6074794944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201792708.8,
            "unit": "ns",
            "range": "± 956432.8962153518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5107699.130208333,
            "unit": "ns",
            "range": "± 7494.683510259796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1553660.3231670673,
            "unit": "ns",
            "range": "± 2219.9532851458584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1055830.1051682692,
            "unit": "ns",
            "range": "± 772.6748050953565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548125.863839286,
            "unit": "ns",
            "range": "± 3935.9064217065734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799568.6033653846,
            "unit": "ns",
            "range": "± 1082.1127172389586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735606.7025991586,
            "unit": "ns",
            "range": "± 547.6544703967724"
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
          "id": "5659583e81cc89edda326d03130aec7857ba79d8",
          "message": "Changelog",
          "timestamp": "2023-09-20T09:32:15+09:00",
          "tree_id": "45ff3c7c020e6dee9b8c53d9978eef4a4721cf01",
          "url": "https://github.com/greymistcube/libplanet/commit/5659583e81cc89edda326d03130aec7857ba79d8"
        },
        "date": 1695170756450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268412.4,
            "unit": "ns",
            "range": "± 10727.434039005995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258723.14583333334,
            "unit": "ns",
            "range": "± 10196.212221169742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220894.7142857143,
            "unit": "ns",
            "range": "± 3255.5309014889494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4281179.642857143,
            "unit": "ns",
            "range": "± 51461.15484011238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3937360.7333333334,
            "unit": "ns",
            "range": "± 73611.03386184387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18331.395833333332,
            "unit": "ns",
            "range": "± 1173.9308101118331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80978.06666666667,
            "unit": "ns",
            "range": "± 4093.0151026633935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68829.14285714286,
            "unit": "ns",
            "range": "± 1023.2346040596237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74570.01020408163,
            "unit": "ns",
            "range": "± 10154.168369095327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4506.291666666667,
            "unit": "ns",
            "range": "± 482.9623918379407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17623.315789473683,
            "unit": "ns",
            "range": "± 1182.3406758139597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393444.8076923075,
            "unit": "ns",
            "range": "± 91776.25185810073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3513814.290322581,
            "unit": "ns",
            "range": "± 105057.9471511456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4236074.0625,
            "unit": "ns",
            "range": "± 80519.1891153645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3889407.1578947366,
            "unit": "ns",
            "range": "± 81966.99888929768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6110818.5121951215,
            "unit": "ns",
            "range": "± 219180.31849234572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1529845.2142857143,
            "unit": "ns",
            "range": "± 26396.80488365844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2654660.882352941,
            "unit": "ns",
            "range": "± 106998.53187677803"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1687855.2674418604,
            "unit": "ns",
            "range": "± 90815.29629883547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4717945.36,
            "unit": "ns",
            "range": "± 307769.7805760152"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45905.142857142855,
            "unit": "ns",
            "range": "± 2342.935575699015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7857097.666666667,
            "unit": "ns",
            "range": "± 23487.579291029142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21745176.6,
            "unit": "ns",
            "range": "± 320551.6176267315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55537422.13333333,
            "unit": "ns",
            "range": "± 946454.8750677722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107255606.8,
            "unit": "ns",
            "range": "± 1563118.5580507321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211378789.3846154,
            "unit": "ns",
            "range": "± 1718536.8423429537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4962377.8328125,
            "unit": "ns",
            "range": "± 41484.11925062333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1568930.079296875,
            "unit": "ns",
            "range": "± 3246.7361677690487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062256.2105189732,
            "unit": "ns",
            "range": "± 3035.8405838063113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674810.6315104165,
            "unit": "ns",
            "range": "± 7710.43300387371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832924.1017717634,
            "unit": "ns",
            "range": "± 1223.3059642891874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778272.0917317708,
            "unit": "ns",
            "range": "± 1213.1837921957617"
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
          "id": "fa6bb26a52386a8c69a3f80449580bd8923592d6",
          "message": "Changelog",
          "timestamp": "2023-09-20T10:20:32+09:00",
          "tree_id": "39ff51a5edb05c68e803a2e0d9eec444ab4d1c41",
          "url": "https://github.com/greymistcube/libplanet/commit/fa6bb26a52386a8c69a3f80449580bd8923592d6"
        },
        "date": 1695173622054,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266222.54545454547,
            "unit": "ns",
            "range": "± 9224.909961001435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262449.86363636365,
            "unit": "ns",
            "range": "± 6144.407068107932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219357.14285714287,
            "unit": "ns",
            "range": "± 3042.6997844056154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4138132.6666666665,
            "unit": "ns",
            "range": "± 36070.34258949878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3842183.6428571427,
            "unit": "ns",
            "range": "± 34226.17072809623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18283.333333333332,
            "unit": "ns",
            "range": "± 1525.0654285647906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83119.68181818182,
            "unit": "ns",
            "range": "± 3918.3982879942973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69145.40909090909,
            "unit": "ns",
            "range": "± 1248.2032289918982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77997.90816326531,
            "unit": "ns",
            "range": "± 11269.129749957447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4667.34693877551,
            "unit": "ns",
            "range": "± 425.4228969850966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17461.956521739132,
            "unit": "ns",
            "range": "± 1530.9870687508349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3219338.2666666666,
            "unit": "ns",
            "range": "± 53226.63047420995"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3381232.724137931,
            "unit": "ns",
            "range": "± 89707.57434173729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193375.722222222,
            "unit": "ns",
            "range": "± 88305.64470253339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3688115.434782609,
            "unit": "ns",
            "range": "± 93253.41139498528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5857237.833333333,
            "unit": "ns",
            "range": "± 86536.58805891754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333703.1020408163,
            "unit": "ns",
            "range": "± 114361.98785232737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2474574.6764705884,
            "unit": "ns",
            "range": "± 78148.85906444173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1653607.8863636365,
            "unit": "ns",
            "range": "± 90023.60473779606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4276733.631578947,
            "unit": "ns",
            "range": "± 93742.42994871669"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45903.64634146341,
            "unit": "ns",
            "range": "± 2030.9053832836837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7700109.428571428,
            "unit": "ns",
            "range": "± 35298.17176288593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19546968.466666665,
            "unit": "ns",
            "range": "± 175427.9427334632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49747127.428571425,
            "unit": "ns",
            "range": "± 309641.95934503607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100803911,
            "unit": "ns",
            "range": "± 678594.3024785189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200756111.07142857,
            "unit": "ns",
            "range": "± 910276.9064575447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4903985.989783654,
            "unit": "ns",
            "range": "± 3592.1246318511553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1581732.2403846155,
            "unit": "ns",
            "range": "± 3671.442917965616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1069380.689732143,
            "unit": "ns",
            "range": "± 849.8732023957544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2535550.9809895833,
            "unit": "ns",
            "range": "± 3012.2245841370313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814651.0201322115,
            "unit": "ns",
            "range": "± 990.3599256891533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736232.7728794643,
            "unit": "ns",
            "range": "± 384.9571564356992"
          }
        ]
      }
    ]
  }
}