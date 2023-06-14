window.BENCHMARK_DATA = {
  "lastUpdate": 1686713296705,
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
          "id": "d34f81fcdc5110778e15209b674451cf0f8e1951",
          "message": "Derive ActionContext.BlockAction instead of assigning",
          "timestamp": "2023-06-12T22:04:14+09:00",
          "tree_id": "86d1e01d5b015b0e21d3b4082135395949884e73",
          "url": "https://github.com/greymistcube/libplanet/commit/d34f81fcdc5110778e15209b674451cf0f8e1951"
        },
        "date": 1686576725383,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12155494.835051546,
            "unit": "ns",
            "range": "± 3543400.845449031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26504218.941860463,
            "unit": "ns",
            "range": "± 5059261.40279058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75384209.66483517,
            "unit": "ns",
            "range": "± 22334211.46521698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 180198769.03125,
            "unit": "ns",
            "range": "± 67249582.72007626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267138443.28651685,
            "unit": "ns",
            "range": "± 44005808.201099455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84104.47619047618,
            "unit": "ns",
            "range": "± 6639.144814424231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373666.4569892473,
            "unit": "ns",
            "range": "± 40656.7138251894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 368165.95454545453,
            "unit": "ns",
            "range": "± 47160.75964137911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 378919.3977272727,
            "unit": "ns",
            "range": "± 55399.03119822642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4943994.675824176,
            "unit": "ns",
            "range": "± 656158.634927012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4524155.17816092,
            "unit": "ns",
            "range": "± 564636.9578931658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33158.125,
            "unit": "ns",
            "range": "± 6549.043405294035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137217.52808988764,
            "unit": "ns",
            "range": "± 20304.514430903542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 143555.88202247192,
            "unit": "ns",
            "range": "± 18287.33753765257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160444.13043478262,
            "unit": "ns",
            "range": "± 32131.569651489393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11308.579545454546,
            "unit": "ns",
            "range": "± 1655.8605862077015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32502.683908045976,
            "unit": "ns",
            "range": "± 5252.069072963521"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1953612.9787234042,
            "unit": "ns",
            "range": "± 281817.17572732194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3969503.1666666665,
            "unit": "ns",
            "range": "± 915041.4861976892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3202035.2747252746,
            "unit": "ns",
            "range": "± 647458.9415344688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9392725.697916666,
            "unit": "ns",
            "range": "± 2406390.796696854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4114193.8218390807,
            "unit": "ns",
            "range": "± 995879.0143270942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4326956.977777778,
            "unit": "ns",
            "range": "± 838559.7999151092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5013045.609195402,
            "unit": "ns",
            "range": "± 552114.8041232922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4734279.6,
            "unit": "ns",
            "range": "± 532626.9788321708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8771314.594117647,
            "unit": "ns",
            "range": "± 948928.4692386012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8637008.26304945,
            "unit": "ns",
            "range": "± 1393202.6746213185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339328.1064670137,
            "unit": "ns",
            "range": "± 207174.5862183551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468458.2789884869,
            "unit": "ns",
            "range": "± 101664.08679905332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3165459.7513020835,
            "unit": "ns",
            "range": "± 372624.1729052396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 886504.5392617985,
            "unit": "ns",
            "range": "± 63438.605830485096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827045.3162841797,
            "unit": "ns",
            "range": "± 15906.315369412006"
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
          "id": "982c6187ade7c9ea1f0e35a05897cc555dce8767",
          "message": "Changelog",
          "timestamp": "2023-06-12T22:08:56+09:00",
          "tree_id": "c34a81b54b5793c4ec53c0313463f15661791867",
          "url": "https://github.com/greymistcube/libplanet/commit/982c6187ade7c9ea1f0e35a05897cc555dce8767"
        },
        "date": 1686577024728,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12913899.772727273,
            "unit": "ns",
            "range": "± 3882245.800932561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28803714.52150538,
            "unit": "ns",
            "range": "± 6639796.630657124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 78212308.21111111,
            "unit": "ns",
            "range": "± 17048809.707008246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132070882.84375,
            "unit": "ns",
            "range": "± 30696715.9015092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 368282393.32323235,
            "unit": "ns",
            "range": "± 131500090.39067256"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83502.54705882353,
            "unit": "ns",
            "range": "± 4692.80511072886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 465268.44680851063,
            "unit": "ns",
            "range": "± 99572.82265374273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 405892.87096774194,
            "unit": "ns",
            "range": "± 58994.162805614455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 435132.8,
            "unit": "ns",
            "range": "± 101731.44122855185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4879258.948275862,
            "unit": "ns",
            "range": "± 482209.47915047855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4512676.971910113,
            "unit": "ns",
            "range": "± 539281.0202965335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32014.30681818182,
            "unit": "ns",
            "range": "± 3671.185391755997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 151781.03846153847,
            "unit": "ns",
            "range": "± 25177.441446795932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121921.12068965517,
            "unit": "ns",
            "range": "± 13898.379627187747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142462.11235955055,
            "unit": "ns",
            "range": "± 16795.587673714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11506.567415730337,
            "unit": "ns",
            "range": "± 1167.1244266236802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32916.193181818184,
            "unit": "ns",
            "range": "± 3733.0122697266866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814320.5,
            "unit": "ns",
            "range": "± 229222.1437591997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3547017.563218391,
            "unit": "ns",
            "range": "± 774580.0485345037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2637920.8988764044,
            "unit": "ns",
            "range": "± 339232.5400156294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7845376.891304348,
            "unit": "ns",
            "range": "± 1555599.3951492677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4112467.8333333335,
            "unit": "ns",
            "range": "± 802420.8724904625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4028307.5824175826,
            "unit": "ns",
            "range": "± 525917.3438620911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5402203.660919541,
            "unit": "ns",
            "range": "± 860834.7744667148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5223345.605882353,
            "unit": "ns",
            "range": "± 844867.0723192132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9136207.655555556,
            "unit": "ns",
            "range": "± 1498844.3336000154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9689818.025369624,
            "unit": "ns",
            "range": "± 1244402.3017987537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2422665.9336336097,
            "unit": "ns",
            "range": "± 197026.56569773357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1483513.23203125,
            "unit": "ns",
            "range": "± 25062.11729422502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3565832.5045855977,
            "unit": "ns",
            "range": "± 135475.75431038346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974252.949884588,
            "unit": "ns",
            "range": "± 56065.543892167065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860988.5280558268,
            "unit": "ns",
            "range": "± 64321.7909192184"
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
          "id": "491a8b1b2360f52794079532c4417611f278c754",
          "message": "Changelog",
          "timestamp": "2023-06-13T00:56:09+09:00",
          "tree_id": "c7d11a1c3f55368b271cae22081535314ea65a25",
          "url": "https://github.com/greymistcube/libplanet/commit/491a8b1b2360f52794079532c4417611f278c754"
        },
        "date": 1686587024999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14294039.097826088,
            "unit": "ns",
            "range": "± 6214475.3806578005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22292993.19047619,
            "unit": "ns",
            "range": "± 2300246.69906713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63523912.43617021,
            "unit": "ns",
            "range": "± 12222365.250274342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137734224.2111111,
            "unit": "ns",
            "range": "± 33540788.33165744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 298217334.7263158,
            "unit": "ns",
            "range": "± 83944207.3999494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85398.58333333333,
            "unit": "ns",
            "range": "± 3832.668050166668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397593.35555555555,
            "unit": "ns",
            "range": "± 55151.12469302751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382609.7247191011,
            "unit": "ns",
            "range": "± 49389.50608768315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 384224.2111111111,
            "unit": "ns",
            "range": "± 60139.74512011365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4977682.215909091,
            "unit": "ns",
            "range": "± 599156.0217473428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4773557.9130434785,
            "unit": "ns",
            "range": "± 811284.2753580621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34667.058139534885,
            "unit": "ns",
            "range": "± 3709.233265798936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142117.4655172414,
            "unit": "ns",
            "range": "± 14194.984895138696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 153155.78651685393,
            "unit": "ns",
            "range": "± 22723.58829422129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 161585.08695652173,
            "unit": "ns",
            "range": "± 29697.654670838896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11452.202127659575,
            "unit": "ns",
            "range": "± 1688.986881095159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27077.885416666668,
            "unit": "ns",
            "range": "± 5875.494919121893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1765538.4382022473,
            "unit": "ns",
            "range": "± 204636.7191590522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3329822.989361702,
            "unit": "ns",
            "range": "± 373682.9440850057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2896014.3033707864,
            "unit": "ns",
            "range": "± 675750.513078008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8237385.870967742,
            "unit": "ns",
            "range": "± 2036661.356139216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3930765.463414634,
            "unit": "ns",
            "range": "± 776707.7973891293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4675936.763736264,
            "unit": "ns",
            "range": "± 1286089.8291038948"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5710084.815217392,
            "unit": "ns",
            "range": "± 1382618.9492815097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5761289.6022727275,
            "unit": "ns",
            "range": "± 1130058.8001494878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12660260.716494845,
            "unit": "ns",
            "range": "± 3584008.3044329537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7583601.955433238,
            "unit": "ns",
            "range": "± 562412.9014610832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2126745.3110677083,
            "unit": "ns",
            "range": "± 106981.13013442665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1684858.5478614268,
            "unit": "ns",
            "range": "± 316135.3122099091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4384541.091715495,
            "unit": "ns",
            "range": "± 951348.3062151494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1056648.033589681,
            "unit": "ns",
            "range": "± 208120.74136958973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1019915.89453125,
            "unit": "ns",
            "range": "± 208451.52835767512"
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
          "id": "5933669b840dd26e15ad7aaf3d629a322056ea7a",
          "message": "Changelog",
          "timestamp": "2023-06-14T12:03:45+09:00",
          "tree_id": "6a4d569228751c536a089727c09800efa4427895",
          "url": "https://github.com/greymistcube/libplanet/commit/5933669b840dd26e15ad7aaf3d629a322056ea7a"
        },
        "date": 1686713279151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8714943,
            "unit": "ns",
            "range": "± 304071.1772030375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21329216.30851064,
            "unit": "ns",
            "range": "± 826962.5436122465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51357265.7,
            "unit": "ns",
            "range": "± 899447.3249747949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108549062.66949153,
            "unit": "ns",
            "range": "± 4790182.237387116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216471124.78301886,
            "unit": "ns",
            "range": "± 8518626.071510728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77094.63953488372,
            "unit": "ns",
            "range": "± 8719.734411649975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326868,
            "unit": "ns",
            "range": "± 19005.062465152485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 371549.93684210523,
            "unit": "ns",
            "range": "± 73920.38409376967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309227.79569892475,
            "unit": "ns",
            "range": "± 19400.76692206597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4458556.606382979,
            "unit": "ns",
            "range": "± 357125.4850580097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4341132.522988506,
            "unit": "ns",
            "range": "± 799934.2486974698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23124.564516129034,
            "unit": "ns",
            "range": "± 4920.379920393324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107038.33333333333,
            "unit": "ns",
            "range": "± 17648.057404155024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112510.72222222222,
            "unit": "ns",
            "range": "± 15823.110353322869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118947.31521739131,
            "unit": "ns",
            "range": "± 16491.621151246756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7254.04255319149,
            "unit": "ns",
            "range": "± 1776.7699757022158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21866.42391304348,
            "unit": "ns",
            "range": "± 5119.849165518809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1850097.6179775281,
            "unit": "ns",
            "range": "± 309951.4494110146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3296019.595238095,
            "unit": "ns",
            "range": "± 375096.7330522364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3085964.7359550563,
            "unit": "ns",
            "range": "± 697164.6439320066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8380109.326086956,
            "unit": "ns",
            "range": "± 1998681.9809732556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3389597.1494252873,
            "unit": "ns",
            "range": "± 185242.8651092202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4562525.042553191,
            "unit": "ns",
            "range": "± 1094177.1225741582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4624614.662650603,
            "unit": "ns",
            "range": "± 250268.04362914173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4514504.728260869,
            "unit": "ns",
            "range": "± 350422.920714733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8147092.612903226,
            "unit": "ns",
            "range": "± 586601.4743008725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8134286.560439561,
            "unit": "ns",
            "range": "± 1595408.2519664539"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2116571.4119073274,
            "unit": "ns",
            "range": "± 165964.7860545711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1775874.2460097447,
            "unit": "ns",
            "range": "± 271414.05782340927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3690232.308775436,
            "unit": "ns",
            "range": "± 305183.0056011664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904348.6630366162,
            "unit": "ns",
            "range": "± 61644.85546856272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870942.21875,
            "unit": "ns",
            "range": "± 20224.257295579413"
          }
        ]
      }
    ]
  }
}