window.BENCHMARK_DATA = {
  "lastUpdate": 1705297561114,
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
          "id": "c2c91f158d66c99735446b52331b68c5a2f18328",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T13:49:52+09:00",
          "tree_id": "e873ef18847f0b94944d2301a00558690c39a59a",
          "url": "https://github.com/greymistcube/libplanet/commit/c2c91f158d66c99735446b52331b68c5a2f18328"
        },
        "date": 1704865812865,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9341955.04,
            "unit": "ns",
            "range": "± 565871.6020377557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23497879.55102041,
            "unit": "ns",
            "range": "± 1368674.2072933065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54949574.88,
            "unit": "ns",
            "range": "± 2077614.1395956129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110529171.54761904,
            "unit": "ns",
            "range": "± 4027124.229718808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227061072.3125,
            "unit": "ns",
            "range": "± 4232064.271245837"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73404.2741935484,
            "unit": "ns",
            "range": "± 11742.511942518788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332921.3370786517,
            "unit": "ns",
            "range": "± 32234.69123755556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326238.86363636365,
            "unit": "ns",
            "range": "± 34604.273728212436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302132.27777777775,
            "unit": "ns",
            "range": "± 5375.675397298854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534284.429411764,
            "unit": "ns",
            "range": "± 321007.995160178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834558.0714285714,
            "unit": "ns",
            "range": "± 45133.252356369536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23263.915789473685,
            "unit": "ns",
            "range": "± 4176.634009870582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106633.13043478261,
            "unit": "ns",
            "range": "± 12928.49760546244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119256.48913043478,
            "unit": "ns",
            "range": "± 13490.600746237586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122491.74736842106,
            "unit": "ns",
            "range": "± 23038.98463473007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8022.239130434783,
            "unit": "ns",
            "range": "± 1013.5063753906421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23465.134831460673,
            "unit": "ns",
            "range": "± 2770.0605022561053"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1517921.75,
            "unit": "ns",
            "range": "± 185262.7613781629"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2800895.088235294,
            "unit": "ns",
            "range": "± 147975.30374423115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559334.0656565656,
            "unit": "ns",
            "range": "± 270887.2685584247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 27216073.85263158,
            "unit": "ns",
            "range": "± 3610537.265208353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3635594.1875,
            "unit": "ns",
            "range": "± 328935.17180359294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3787013.9191919193,
            "unit": "ns",
            "range": "± 383305.0303339891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4478094.4375,
            "unit": "ns",
            "range": "± 324097.08602288045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4903305.739583333,
            "unit": "ns",
            "range": "± 505880.19969015644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33229403.66,
            "unit": "ns",
            "range": "± 4465723.695538997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6448843.747282608,
            "unit": "ns",
            "range": "± 158944.0804068323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945283.6959635417,
            "unit": "ns",
            "range": "± 22567.757395419332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168202.4244791667,
            "unit": "ns",
            "range": "± 21144.74219650399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3091372.7392241377,
            "unit": "ns",
            "range": "± 87730.36845122211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839733.5806640625,
            "unit": "ns",
            "range": "± 13153.01525970754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796359.4554443359,
            "unit": "ns",
            "range": "± 14824.720062658962"
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
          "id": "317a05b99efaccae95fcfc7558902778cf1a4304",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T14:33:08+09:00",
          "tree_id": "765a74f944205f529edc434565fa9c34f6c935e1",
          "url": "https://github.com/greymistcube/libplanet/commit/317a05b99efaccae95fcfc7558902778cf1a4304"
        },
        "date": 1704865837086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7492514.142857143,
            "unit": "ns",
            "range": "± 32565.084869457118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18805722,
            "unit": "ns",
            "range": "± 395391.5670541742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46601471.13333333,
            "unit": "ns",
            "range": "± 268923.34844706394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104696513.74,
            "unit": "ns",
            "range": "± 6599671.624301439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193185323.85714287,
            "unit": "ns",
            "range": "± 1968385.3548479334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48212.278350515466,
            "unit": "ns",
            "range": "± 12320.558873401966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219069.69333333333,
            "unit": "ns",
            "range": "± 11081.090042943422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 217316.7659574468,
            "unit": "ns",
            "range": "± 18862.259022410497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200564.7142857143,
            "unit": "ns",
            "range": "± 19872.98285893037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3970487.625,
            "unit": "ns",
            "range": "± 100636.9648138308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3386329.6904761903,
            "unit": "ns",
            "range": "± 65270.95674235138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12962.09090909091,
            "unit": "ns",
            "range": "± 953.8066340138441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62667.989690721646,
            "unit": "ns",
            "range": "± 8321.094641400408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56588.215053763444,
            "unit": "ns",
            "range": "± 9269.978357989678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62858.858695652176,
            "unit": "ns",
            "range": "± 11619.230667711352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4523.881720430108,
            "unit": "ns",
            "range": "± 1607.0249034180224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12560.655913978495,
            "unit": "ns",
            "range": "± 1330.4364476319306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1122664.3092783506,
            "unit": "ns",
            "range": "± 113028.45373818498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2418183.4226804124,
            "unit": "ns",
            "range": "± 139891.0185786626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1792819.1170212766,
            "unit": "ns",
            "range": "± 101829.38897493033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20174336.693181816,
            "unit": "ns",
            "range": "± 2544197.848331117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2991027.3720930233,
            "unit": "ns",
            "range": "± 162730.22522466956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3045066.5714285714,
            "unit": "ns",
            "range": "± 42767.049276308484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3595636.675,
            "unit": "ns",
            "range": "± 124776.18907897112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3662828.1276595746,
            "unit": "ns",
            "range": "± 141924.40563241328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22296228.28888889,
            "unit": "ns",
            "range": "± 2374814.407681697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4412965.627604167,
            "unit": "ns",
            "range": "± 63882.70953778488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1356617.9798583984,
            "unit": "ns",
            "range": "± 10176.890122275752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 981961.2794228831,
            "unit": "ns",
            "range": "± 44346.5542296242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2427689.238671875,
            "unit": "ns",
            "range": "± 146477.00110884226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 729010.0252148438,
            "unit": "ns",
            "range": "± 55010.71581320994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 643728.6176359216,
            "unit": "ns",
            "range": "± 53634.12417810439"
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
          "id": "9d5838bbe977e57a1edbb9ba8e74cbe34877851a",
          "message": "Move GetAccount from IWorldState to IWorld",
          "timestamp": "2024-01-10T16:18:46+09:00",
          "tree_id": "9a7b09fe5b4da2a43779332d4bcf807110efea2a",
          "url": "https://github.com/greymistcube/libplanet/commit/9d5838bbe977e57a1edbb9ba8e74cbe34877851a"
        },
        "date": 1704871977582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7604376.416666667,
            "unit": "ns",
            "range": "± 41813.52029810091"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18484465.5,
            "unit": "ns",
            "range": "± 233056.84902436714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46051316.56666667,
            "unit": "ns",
            "range": "± 753686.2937279359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96275996.12820514,
            "unit": "ns",
            "range": "± 3329445.0828433163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212787829.24390244,
            "unit": "ns",
            "range": "± 11243078.129160205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33971.544444444444,
            "unit": "ns",
            "range": "± 2736.9319990941353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237195.70833333334,
            "unit": "ns",
            "range": "± 23187.067943333666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218453.1157894737,
            "unit": "ns",
            "range": "± 17872.359550769506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196676.5,
            "unit": "ns",
            "range": "± 17359.80026598017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4028619.3571428573,
            "unit": "ns",
            "range": "± 91840.89690561919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3642448.7666666666,
            "unit": "ns",
            "range": "± 36346.34969383675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19985.968085106382,
            "unit": "ns",
            "range": "± 2678.5486659681455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74559.44791666667,
            "unit": "ns",
            "range": "± 12428.43475504525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53440.08791208791,
            "unit": "ns",
            "range": "± 3307.9391524981293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65732.69473684211,
            "unit": "ns",
            "range": "± 10999.394076226243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3490.965909090909,
            "unit": "ns",
            "range": "± 608.1245136580236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12438.022471910112,
            "unit": "ns",
            "range": "± 1377.1706335943738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1154192.3548387096,
            "unit": "ns",
            "range": "± 116976.05890872874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2405493.091954023,
            "unit": "ns",
            "range": "± 131213.9417850058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1831868.0606060605,
            "unit": "ns",
            "range": "± 135148.60730818956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19527779.61956522,
            "unit": "ns",
            "range": "± 2647007.3713211203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3089801.8928571427,
            "unit": "ns",
            "range": "± 115963.53899734307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3489495.6086956523,
            "unit": "ns",
            "range": "± 590581.5282869658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3817290.5588235296,
            "unit": "ns",
            "range": "± 155405.66590062436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3961562.7210526317,
            "unit": "ns",
            "range": "± 283320.7376406427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25391642.489130434,
            "unit": "ns",
            "range": "± 4342195.838945591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4333908.702083333,
            "unit": "ns",
            "range": "± 81049.12547401842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1366610.1055989584,
            "unit": "ns",
            "range": "± 8881.958153430474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 893555.9248046875,
            "unit": "ns",
            "range": "± 9918.374447002972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962889.4768229167,
            "unit": "ns",
            "range": "± 30606.27361130224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626846.20078125,
            "unit": "ns",
            "range": "± 8669.910036942156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576999.1003255208,
            "unit": "ns",
            "range": "± 7282.304879281199"
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
          "id": "9a53103eff2ae42a75bac69880162fb8c56532e3",
          "message": "Minor cleanup",
          "timestamp": "2024-01-15T14:30:29+09:00",
          "tree_id": "7ff39cfea98c388bd92eea5d3f7282739e1297e7",
          "url": "https://github.com/greymistcube/libplanet/commit/9a53103eff2ae42a75bac69880162fb8c56532e3"
        },
        "date": 1705297544552,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9638531.09574468,
            "unit": "ns",
            "range": "± 632562.1145865783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22995947.979797978,
            "unit": "ns",
            "range": "± 2059440.4319363458"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58253779.572916664,
            "unit": "ns",
            "range": "± 3872245.1233944707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117077330.19565217,
            "unit": "ns",
            "range": "± 9058216.997226065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245321980.98387095,
            "unit": "ns",
            "range": "± 7397395.398279645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44829.9375,
            "unit": "ns",
            "range": "± 11015.729482796765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254216.47872340426,
            "unit": "ns",
            "range": "± 32620.202097492634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244240.80303030304,
            "unit": "ns",
            "range": "± 35894.51202708205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234826.05555555556,
            "unit": "ns",
            "range": "± 35917.23742479403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4480857.2727272725,
            "unit": "ns",
            "range": "± 515713.24530189513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4035668.23,
            "unit": "ns",
            "range": "± 390837.20824298286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15203.145161290322,
            "unit": "ns",
            "range": "± 1612.726806733143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69849.3469387755,
            "unit": "ns",
            "range": "± 10959.479664544657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71686.39583333333,
            "unit": "ns",
            "range": "± 10840.062544468203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72586.53125,
            "unit": "ns",
            "range": "± 15043.819602784342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4778.326530612245,
            "unit": "ns",
            "range": "± 1503.798378234813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12083.28409090909,
            "unit": "ns",
            "range": "± 704.5346054798899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057489.7653061224,
            "unit": "ns",
            "range": "± 87141.68395333373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2208836.220588235,
            "unit": "ns",
            "range": "± 102938.71902990526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1691572.6630434783,
            "unit": "ns",
            "range": "± 99431.20724768138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19209676,
            "unit": "ns",
            "range": "± 2270624.3560258835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400871.1666666665,
            "unit": "ns",
            "range": "± 228255.34474999434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3457977.5353535353,
            "unit": "ns",
            "range": "± 279712.4224429154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4016570.98989899,
            "unit": "ns",
            "range": "± 417234.50182164594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4194052.663265306,
            "unit": "ns",
            "range": "± 393565.3457892085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25368307.43298969,
            "unit": "ns",
            "range": "± 3565101.711831562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4506472.516875,
            "unit": "ns",
            "range": "± 117735.35432181247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1345519.5516927084,
            "unit": "ns",
            "range": "± 17061.336533668826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 874878.9368489584,
            "unit": "ns",
            "range": "± 7667.552997295397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1981123.517299107,
            "unit": "ns",
            "range": "± 33434.41930209576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618786.4870793269,
            "unit": "ns",
            "range": "± 7073.2925290032745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577156.1544270833,
            "unit": "ns",
            "range": "± 17142.338038126032"
          }
        ]
      }
    ]
  }
}