window.BENCHMARK_DATA = {
  "lastUpdate": 1683189138107,
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
          "id": "3a5c9a2204574574a02c1ec799a1e3f6b2885b5e",
          "message": "Added test",
          "timestamp": "2023-05-04T16:54:14+09:00",
          "tree_id": "f3fcd1efcc43b9616c4dce4595871a2f85485482",
          "url": "https://github.com/greymistcube/libplanet/commit/3a5c9a2204574574a02c1ec799a1e3f6b2885b5e"
        },
        "date": 1683188219041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1797192.7083333333,
            "unit": "ns",
            "range": "± 156157.33243299118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3507920.238095238,
            "unit": "ns",
            "range": "± 188004.00391773373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2818134.4086021506,
            "unit": "ns",
            "range": "± 232978.69024339304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7044769.14893617,
            "unit": "ns",
            "range": "± 401528.0402443815"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79290.52631578948,
            "unit": "ns",
            "range": "± 16421.755637893384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9963518.55670103,
            "unit": "ns",
            "range": "± 643929.247590185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25368287.096774194,
            "unit": "ns",
            "range": "± 709198.904277183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64811526.08695652,
            "unit": "ns",
            "range": "± 1387813.5256639526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129627644.8275862,
            "unit": "ns",
            "range": "± 3673236.6913144486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263432892,
            "unit": "ns",
            "range": "± 6928571.270045506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6019973.645833333,
            "unit": "ns",
            "range": "± 90631.78757027705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980948.199728261,
            "unit": "ns",
            "range": "± 48274.02452598696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1487776.375679348,
            "unit": "ns",
            "range": "± 32696.98882437726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3298283.180147059,
            "unit": "ns",
            "range": "± 64539.45105117231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049424.0668402778,
            "unit": "ns",
            "range": "± 21121.50699007337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969515.8203125,
            "unit": "ns",
            "range": "± 26616.293126057168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3929615.9793814435,
            "unit": "ns",
            "range": "± 363348.3076673234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4351959.183673469,
            "unit": "ns",
            "range": "± 314120.01870607364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5405227.2727272725,
            "unit": "ns",
            "range": "± 437504.1702001092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5464494.285714285,
            "unit": "ns",
            "range": "± 264275.0981517282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8757480.851063829,
            "unit": "ns",
            "range": "± 333932.5489287359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373695.9183673469,
            "unit": "ns",
            "range": "± 30436.670497995943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359453.125,
            "unit": "ns",
            "range": "± 25300.63428838765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328222.9166666667,
            "unit": "ns",
            "range": "± 36447.74913031896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5247328.571428572,
            "unit": "ns",
            "range": "± 218597.04041437083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4624905.194805195,
            "unit": "ns",
            "range": "± 231550.1286501955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30645.652173913044,
            "unit": "ns",
            "range": "± 6595.509845299738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 138988.54166666666,
            "unit": "ns",
            "range": "± 20020.525624266957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124692.63157894737,
            "unit": "ns",
            "range": "± 17915.120453780382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138418.75,
            "unit": "ns",
            "range": "± 22071.79344297771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8542.553191489362,
            "unit": "ns",
            "range": "± 1684.112309596302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29261.340206185567,
            "unit": "ns",
            "range": "± 10231.557354257991"
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
          "id": "82c2810beda849f7b86f0b5b2a1801929f61891b",
          "message": "Changelog",
          "timestamp": "2023-05-04T16:58:06+09:00",
          "tree_id": "b1f02694d62073f9fb59d608a5c2a8b1ae63bba1",
          "url": "https://github.com/greymistcube/libplanet/commit/82c2810beda849f7b86f0b5b2a1801929f61891b"
        },
        "date": 1683188215372,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1375783.6734693877,
            "unit": "ns",
            "range": "± 116352.32549554898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2588414.285714286,
            "unit": "ns",
            "range": "± 158807.86355144132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212431.9587628865,
            "unit": "ns",
            "range": "± 177934.66529552813"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4996732.608695652,
            "unit": "ns",
            "range": "± 125413.3770310804"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49991.57894736842,
            "unit": "ns",
            "range": "± 3531.519567994285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6925514.285714285,
            "unit": "ns",
            "range": "± 109058.42370133441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19401223.529411763,
            "unit": "ns",
            "range": "± 389874.68103451486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49405356.25,
            "unit": "ns",
            "range": "± 914727.2675275038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99519466.66666667,
            "unit": "ns",
            "range": "± 1451975.6721036865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196859453.33333334,
            "unit": "ns",
            "range": "± 3340901.310781412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4961681.927083333,
            "unit": "ns",
            "range": "± 54561.41567155253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1547781.4174107143,
            "unit": "ns",
            "range": "± 3232.373372734409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185157.578125,
            "unit": "ns",
            "range": "± 4819.5985803966505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2634687.0833333335,
            "unit": "ns",
            "range": "± 10285.912151290395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837780.1497395834,
            "unit": "ns",
            "range": "± 3339.3865904719055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759358.0915178572,
            "unit": "ns",
            "range": "± 2414.5299046908094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3147552.43902439,
            "unit": "ns",
            "range": "± 165893.95633073596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354343.75,
            "unit": "ns",
            "range": "± 65497.24644339384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3880341.1764705884,
            "unit": "ns",
            "range": "± 77727.4811345988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4250430.6122448975,
            "unit": "ns",
            "range": "± 167215.43639379516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6509581.818181818,
            "unit": "ns",
            "range": "± 189439.02458071016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264470.3703703704,
            "unit": "ns",
            "range": "± 10576.346510993999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253684.2105263158,
            "unit": "ns",
            "range": "± 5609.640824102609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215669.23076923078,
            "unit": "ns",
            "range": "± 2296.1506249172094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3928158.3333333335,
            "unit": "ns",
            "range": "± 38273.40539599345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551414.285714286,
            "unit": "ns",
            "range": "± 44188.48800906717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20567.01030927835,
            "unit": "ns",
            "range": "± 2035.4013552555048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93847.87234042553,
            "unit": "ns",
            "range": "± 7814.0998659289335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85158.94736842105,
            "unit": "ns",
            "range": "± 6237.813561586731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107008.16326530612,
            "unit": "ns",
            "range": "± 14900.139579152414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7331.313131313132,
            "unit": "ns",
            "range": "± 1533.0805631776682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22867.708333333332,
            "unit": "ns",
            "range": "± 2107.904661364813"
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
          "id": "1c8fad6d66c2870eaf410a8fd7ab02d2c3882cda",
          "message": "Changelog",
          "timestamp": "2023-05-04T17:05:32+09:00",
          "tree_id": "77d55871bc57f7b795fa7d615ec8640e8890a6d3",
          "url": "https://github.com/greymistcube/libplanet/commit/1c8fad6d66c2870eaf410a8fd7ab02d2c3882cda"
        },
        "date": 1683188501308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1381946.3917525774,
            "unit": "ns",
            "range": "± 119171.68905079733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2442580.9523809524,
            "unit": "ns",
            "range": "± 57256.952582613216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198678.350515464,
            "unit": "ns",
            "range": "± 141793.07416296535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5463061,
            "unit": "ns",
            "range": "± 331744.67055769614"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52522.68041237113,
            "unit": "ns",
            "range": "± 6876.295410603239"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7577229.62962963,
            "unit": "ns",
            "range": "± 314395.40263792063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20171125,
            "unit": "ns",
            "range": "± 361692.5204477224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50907307.692307696,
            "unit": "ns",
            "range": "± 358900.163605281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101016950,
            "unit": "ns",
            "range": "± 1039549.9712338545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201099346.15384614,
            "unit": "ns",
            "range": "± 2705626.8329832503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4919012.109375,
            "unit": "ns",
            "range": "± 95903.40606281329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542200.703125,
            "unit": "ns",
            "range": "± 22133.770912211683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187161.0630580357,
            "unit": "ns",
            "range": "± 14768.04498760006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689785.15625,
            "unit": "ns",
            "range": "± 33349.714432942135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839705.9700520834,
            "unit": "ns",
            "range": "± 7147.461409251997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775516.19140625,
            "unit": "ns",
            "range": "± 3732.2122923935963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3223591.525423729,
            "unit": "ns",
            "range": "± 141462.05082457638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3413639.393939394,
            "unit": "ns",
            "range": "± 108106.22073738962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3890100,
            "unit": "ns",
            "range": "± 108623.08509421289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4251843.58974359,
            "unit": "ns",
            "range": "± 134435.11993145675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6718857.894736842,
            "unit": "ns",
            "range": "± 288121.8591073727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279156.4705882353,
            "unit": "ns",
            "range": "± 14992.104644801288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275445,
            "unit": "ns",
            "range": "± 26199.908917260138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219140.6976744186,
            "unit": "ns",
            "range": "± 11033.023988510737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3938735.714285714,
            "unit": "ns",
            "range": "± 60363.54742013476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3658577.1428571427,
            "unit": "ns",
            "range": "± 120064.61026737005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22474.736842105263,
            "unit": "ns",
            "range": "± 2618.5089317693532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95407.07070707071,
            "unit": "ns",
            "range": "± 8305.85302018454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91703.125,
            "unit": "ns",
            "range": "± 10024.343560342964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113763.54166666667,
            "unit": "ns",
            "range": "± 20871.275248112088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7165.979381443299,
            "unit": "ns",
            "range": "± 1248.6564944920256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20893.75,
            "unit": "ns",
            "range": "± 1928.9927832666292"
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
          "id": "67ee8d7dcf8793c40cd60a48b6274933d3e769c9",
          "message": "Update Libplanet.Tests/Blockchain/BlockChainTest.ProposeBlock.cs\n\nCo-authored-by: Swen Mun <longfinfunnel@gmail.com>",
          "timestamp": "2023-05-04T17:12:06+09:00",
          "tree_id": "0304b66bc59b57ddd30c4a4bb80e79cb46f4c2ce",
          "url": "https://github.com/greymistcube/libplanet/commit/67ee8d7dcf8793c40cd60a48b6274933d3e769c9"
        },
        "date": 1683189115164,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1554977.7777777778,
            "unit": "ns",
            "range": "± 203306.76959304203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3205686.7346938774,
            "unit": "ns",
            "range": "± 259405.12056394503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2563120.618556701,
            "unit": "ns",
            "range": "± 239703.38743006266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6533438.775510204,
            "unit": "ns",
            "range": "± 583123.0861353821"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64648.97959183674,
            "unit": "ns",
            "range": "± 14618.172879312795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7754752.94117647,
            "unit": "ns",
            "range": "± 418947.4093567386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21233096.629213482,
            "unit": "ns",
            "range": "± 1174388.6109037022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58776750.943396226,
            "unit": "ns",
            "range": "± 2425955.2289627655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119112960,
            "unit": "ns",
            "range": "± 8155109.234651054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218538180,
            "unit": "ns",
            "range": "± 8737929.33307405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5603663.075657895,
            "unit": "ns",
            "range": "± 191264.37102455637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1824271.0526315789,
            "unit": "ns",
            "range": "± 39649.31713805853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337606.5069901317,
            "unit": "ns",
            "range": "± 29665.896587596228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3131590.6721443967,
            "unit": "ns",
            "range": "± 90047.69404195111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029483.609375,
            "unit": "ns",
            "range": "± 26992.418739571276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 936741.4481026785,
            "unit": "ns",
            "range": "± 21768.32656226348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3231432,
            "unit": "ns",
            "range": "± 287320.33116894163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3677380.2083333335,
            "unit": "ns",
            "range": "± 350663.3461612558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4525067.676767677,
            "unit": "ns",
            "range": "± 358788.2525516092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4489783.333333333,
            "unit": "ns",
            "range": "± 405100.28249458555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7726792.929292929,
            "unit": "ns",
            "range": "± 566233.0170904665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319419.387755102,
            "unit": "ns",
            "range": "± 48531.00965970483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316382.4742268041,
            "unit": "ns",
            "range": "± 56306.66962105319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262742.85714285716,
            "unit": "ns",
            "range": "± 44595.270425572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4489932.291666667,
            "unit": "ns",
            "range": "± 401794.29471069056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4136252,
            "unit": "ns",
            "range": "± 367313.8603648951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26133,
            "unit": "ns",
            "range": "± 9568.963455681165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99303.09278350516,
            "unit": "ns",
            "range": "± 22191.92539720363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82810.41666666667,
            "unit": "ns",
            "range": "± 19516.06344671334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110097.84946236559,
            "unit": "ns",
            "range": "± 22568.33092061328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4811.578947368421,
            "unit": "ns",
            "range": "± 895.8370812529566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22987.628865979383,
            "unit": "ns",
            "range": "± 9664.79066996063"
          }
        ]
      }
    ]
  }
}